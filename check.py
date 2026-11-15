"""Run: python3 check.py (requires Playwright and Chromium)."""
import os
import tempfile
from pathlib import Path
from html.parser import HTMLParser
from playwright.sync_api import sync_playwright, expect

ROOT = Path(__file__).resolve().parent
SITE_URL = os.environ.get('SITE_URL', (ROOT / 'index.html').as_uri())
ARTIFACTS = Path(tempfile.gettempdir()) / 'northern-preview'
ARTIFACTS.mkdir(exist_ok=True)

class Links(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids, self.anchors = [], []
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if 'id' in attrs:
            self.ids.append(attrs['id'])
        if attrs.get('href', '').startswith('#'):
            self.anchors.append(attrs['href'][1:])

markup = (ROOT / 'index.html').read_text()
links = Links()
links.feed(markup)
assert len(links.ids) == len(set(links.ids)), 'Duplicate IDs'
assert set(links.anchors) <= set(links.ids), 'Broken section link'
for obsolete in ['VENTURIA', '$1,290', '4.9/5', 'hello@', 'San Diego', 'Find Your Somewhere', 'Spain', 'Indonesia', 'Switzerland', 'Send My Enquiry']:
    assert obsolete not in markup, f'Template content remains: {obsolete}'

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={'width': 1440, 'height': 1000}, reduced_motion='reduce')
    errors = []
    page.on('pageerror', lambda error: errors.append(str(error)))
    page.goto(SITE_URL)
    page.evaluate('document.fonts.ready')
    page.locator('img[loading="lazy"]').evaluate_all('(images) => images.forEach(image => image.loading = "eager")')
    page.wait_for_function('Array.from(document.images).every(image => image.complete)')
    expect(page).to_have_title('Northern All Star — Elevating Thai Travel Experiences')
    expect(page.get_by_role('heading', level=1)).to_have_text('Elevating ThaiTravel Experiences')
    assert page.locator('main > section').evaluate_all('els => els.map(el => el.id || "hero")') == ['hero', 'about', 'what-we-do', 'brands', 'destinations', 'approach', 'contact', 'partners']
    expect(page.locator('.service-row')).to_have_count(3)
    expect(page.locator('.value-grid > div')).to_have_count(3)
    expect(page.locator('.destination-card')).to_have_count(8)
    expect(page.locator('.approach-grid > article')).to_have_count(4)
    expect(page.locator('.partner-grid > li')).to_have_count(8)
    expect(page.locator('form')).to_have_count(0)
    expect(page.locator('[data-photo-slot]')).to_have_count(13)
    expected_destinations = ['Chiang Rai', 'Chiang Mai', 'Bangkok', 'Pattaya & Chonburi', 'Koh Samui', 'Krabi', 'Phang Nga', 'Phuket']
    assert page.locator('.destination-card h3').all_text_contents() == expected_destinations
    assert page.locator('.partner-grid li').evaluate_all('els => els.map(el => el.getAttribute("aria-label"))') == ['Klook', 'GetYourGuide', 'KKday', 'Trip.com', 'Central Pattana', 'Headout', 'Pelago', 'Viator']
    expect(page.locator('.partner-grid img')).to_have_count(8)
    expect(page.locator('img[data-photo-slot]')).to_have_count(13)
    expect(page.locator('.footer .brand-logo-window img')).to_have_count(1)
    expect(page.locator('.header .brand-logo-horizontal')).to_have_count(1)
    expect(page.locator('.neptune-logo')).to_be_visible()
    expect(page.locator('.partner-grid img[alt="KKday"]')).to_have_attribute('src', 'assets/brands/kkday.svg')
    assert 'Photograph to follow' not in markup
    assert 'New Thailand imagery to follow' not in markup
    for link in page.locator('.contact-options > a').all():
        expect(link).to_have_attribute('href', 'https://www.novatrip.co/b2b')
    expect(page.get_by_role('link', name='Explore NovaTrip', exact=False).first).to_have_attribute('href', 'https://www.novatrip.co')

    # Local assets and no dead links; destinations without supplied URLs stay non-interactive.
    for source in page.locator('img[src], link[rel="stylesheet"], script[src]').evaluate_all("els => els.map(el => el.getAttribute('src') || el.getAttribute('href'))"):
        assert (ROOT / source).is_file() and (ROOT / source).stat().st_size, source
    assert page.evaluate("Array.from(document.images).every(img => img.complete && img.naturalWidth > 0)")
    assert page.evaluate("document.fonts.check('16px Inter')")
    for link in page.locator('a[target="_blank"]').all():
        assert 'noopener' in link.get_attribute('rel')

    for width in [1979, 1440, 1280, 1024, 768, 390, 320]:
        page.set_viewport_size({'width': width, 'height': 1000 if width > 600 else 844})
        assert page.evaluate('document.documentElement.scrollWidth <= innerWidth'), f'Overflow at {width}px'
        for slot in page.locator('[data-photo-slot]').all():
            bounds = slot.bounding_box()
            assert bounds and bounds['width'] > 0 and bounds['height'] > 0
        if width in [1440, 390]:
            page.screenshot(path=str(ARTIFACTS / f'northern-images-{width}.png'), full_page=True)

    page.set_viewport_size({'width': 1440, 'height': 1000})
    page.get_by_role('navigation').get_by_role('link', name='Our Brands', exact=True).click()
    expect(page).to_have_url(SITE_URL + '#brands')
    expect(page.get_by_role('navigation').get_by_role('link', name='Our Brands', exact=True)).to_have_attribute('aria-current', 'location')
    page.locator('.neptune-details summary').click()
    expect(page.locator('.neptune-details')).to_have_attribute('open', '')
    expect(page.get_by_text('Combining distinctive boat design, personalized service, and local expertise,', exact=False)).to_be_visible()
    page.locator('.neptune-details summary').click()
    expect(page.locator('.neptune-details')).not_to_have_attribute('open', '')

    # Each CTA plays its own supplied video; closing stops and unloads media.
    dialog = page.locator('#video-dialog')
    player = dialog.locator('video')
    assert player.get_attribute('src') is None
    for width, brand, filename, duration in [(1440, 'NovaTrip', 'novatrip.mp4', 72.064), (390, 'NovaTrip B2B', 'novatrip-b2b.mp4', 63.701)]:
        page.set_viewport_size({'width': width, 'height': 844})
        trigger = page.get_by_role('button', name=f'Watch {brand} video', exact=True)
        trigger.click()
        expect(dialog).to_be_visible()
        expect(dialog).to_have_accessible_name(brand)
        expect(player).to_have_attribute('src', f'assets/videos/{filename}')
        page.wait_for_function('document.querySelector("#video-dialog video").currentTime > 0.1')
        assert not player.evaluate('(v) => v.paused')
        assert abs(player.evaluate('(v) => v.duration') - duration) < 0.1
        assert page.evaluate('getComputedStyle(document.body).overflow') == 'hidden'
        bounds = dialog.bounding_box()
        assert bounds['x'] >= 0 and bounds['x'] + bounds['width'] <= width
        assert bounds['y'] >= 0 and bounds['y'] + bounds['height'] <= 844
        dialog.screenshot(path=str(ARTIFACTS / f'video-popup-{width}.png'))
        page.keyboard.press('Escape')
        expect(dialog).not_to_be_visible()
        page.wait_for_function('!document.querySelector("#video-dialog video").hasAttribute("src")')
        assert player.evaluate('(v) => v.paused')
        expect(trigger).to_be_focused()
        trigger.click()
        page.get_by_role('button', name='Close video', exact=True).click()
        expect(dialog).not_to_be_visible()
        page.wait_for_function('!document.querySelector("#video-dialog video").hasAttribute("src")')
        trigger.click()
        page.mouse.click(1, 1)
        expect(dialog).not_to_be_visible()
        page.wait_for_function('!document.querySelector("#video-dialog video").hasAttribute("src")')

    page.set_viewport_size({'width': 390, 'height': 844})
    page.get_by_role('button', name='Open menu', exact=True).click()
    expect(page.get_by_role('navigation')).to_be_visible()
    page.get_by_role('navigation').get_by_role('link', name='Contact', exact=True).click()
    expect(page.get_by_role('navigation')).not_to_be_visible()
    expect(page).to_have_url(SITE_URL + '#contact')
    page.get_by_role('button', name='Open menu', exact=True).click()
    page.keyboard.press('Escape')
    expect(page.locator('.menu-toggle')).to_be_focused()
    page.get_by_role('button', name='Open menu', exact=True).click()
    page.set_viewport_size({'width': 1440, 'height': 1000})
    expect(page.locator('.menu-toggle')).to_have_attribute('aria-expanded', 'false')
    assert not errors, errors
    browser.close()

print(f'PASS: brief content, section order, destinations, partners, CTA targets, local assets, responsive layouts, video playback and popup closing, menu and Neptune details. Screenshots: {ARTIFACTS}')
