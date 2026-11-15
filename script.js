const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');

function closeMenu() {
  navigation.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open menu');
}

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  navigation.classList.toggle('is-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});

navigation.addEventListener('click', event => {
  const target = event.target.closest('a');
  if (!target) return;
  navigation.querySelectorAll('a').forEach(link => {
    const active = link === target;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  closeMenu();
});

document.addEventListener('click', event => {
  if (!event.target.closest('.header')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});
window.matchMedia('(min-width: 1024px)').addEventListener('change', closeMenu);

const videoDialog = document.querySelector('#video-dialog');
const videoPlayer = videoDialog.querySelector('video');
const videoTitle = videoDialog.querySelector('#video-title');
const videoStatus = videoDialog.querySelector('.video-status');

document.querySelectorAll('[data-video]').forEach(button => {
  button.addEventListener('click', () => {
    videoTitle.textContent = button.dataset.videoTitle;
    videoStatus.hidden = true;
    videoPlayer.src = button.dataset.video;
    videoDialog.showModal();
    videoPlayer.play().catch(error => {
      if (error.name === 'NotAllowedError' && videoDialog.open) {
        videoStatus.textContent = 'Press play to start the video.';
        videoStatus.hidden = false;
      }
    });
  });
});

videoDialog.querySelector('.video-close').addEventListener('click', () => videoDialog.close());
videoDialog.addEventListener('click', event => {
  const bounds = videoDialog.getBoundingClientRect();
  if (event.target === videoDialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) {
    videoDialog.close();
  }
});
videoDialog.addEventListener('close', () => {
  videoPlayer.pause();
  videoPlayer.removeAttribute('src');
  videoPlayer.load();
});
videoPlayer.addEventListener('playing', () => { videoStatus.hidden = true; });
videoPlayer.addEventListener('error', () => {
  if (!videoDialog.open) return;
  videoStatus.textContent = 'Unable to play this video. Please close it and try again.';
  videoStatus.hidden = false;
});
