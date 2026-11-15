# Northern All Star — แผนเนื้อหาและภาพ

สถานะ: ลงเนื้อหาและภาพ P01–P12 แล้ว พร้อมโลโก้ Northern / Neptune / พาร์ทเนอร์ 7 ราย ปรับธีมตามสีโลโก้ Northern ใส่ภาพประชาสัมพันธ์ B2B ที่ผู้ใช้ส่งเพิ่มเติมแล้ว เหลือโลโก้ KKday; รายละเอียดไฟล์จริงอยู่ใน README.md

อ้างอิง: `/Users/apple/Downloads/Northern All Star Website Structure.pdf` ครบ 5 หน้า และหน้า HTML ที่สร้างจาก Figma เฟรม 15:5

## 1. แนวทางหลัก

ทำหน้าเว็บบริษัท Northern All Star โดยใช้เลย์เอาต์ สีพื้น ระยะห่าง ภาพขนาดใหญ่ และลักษณะปุ่มจาก Figma เดิม คงภาษาอังกฤษตามบรีฟ เนื้อหาอธิบายว่าบริษัทเชื่อมประสบการณ์ท่องเที่ยว เทคโนโลยี และพันธมิตรในประเทศไทยอย่างไร แล้วส่งผู้สนใจไปยังบริการที่เหมาะสม

กลุ่มผู้ชมหลักตามเนื้อหา: พันธมิตรธุรกิจ เอเจนซี ผู้ประกอบการท่องเที่ยว และผู้สนใจบริการในเครือ นักเดินทางเข้าจองผ่าน NovaTrip

ภาพตัวอย่าง Hero ใน PDF ใช้เป็นแนวทางเนื้อหาและบรรยากาศประเทศไทย ส่วนหน้าตาเว็บยังอิง Figma ที่เลือกไว้ ชื่อ โลโก้ และสีแบรนด์จริงต้องอิงไฟล์แบรนด์ที่ได้รับ

## 2. โครงสร้างหน้าและการแทนที่เว็บเดิม

| ลำดับ | ส่วนใหม่ | ใช้ส่วนเดิมอย่างไร | เนื้อหา / พฤติกรรม |
|---|---|---|---|
| 0 | Header | ปรับโลโก้และเมนู VENTURIA | เมนู Home / About / What We Do / Our Brands / Destinations / Contact; ปุ่ม Partner With Us ไปส่วน Contact |
| 1 | Hero | ใช้ Hero ภาพใหญ่ขอบมนเดิม | ภาพประเทศไทย ข้อความบริษัท และปุ่ม Explore Our Brands / Partner With Us |
| 2 | About Northern All Star | ใช้ statement + ภาพ/ข้อความ 2 คอลัมน์เดิม | Who We Are / Mission / Expertise; เปลี่ยนตัวเลขสถิติเดิมเป็น Core Values 3 ข้อ |
| 3 | What We Do | ใช้รายการ Journey เดิม | ลดเหลือ 3 แถวตาม 3 pillars ใน PDF อธิบายหน้าที่แต่ละด้าน |
| 4 | Our Brands & Solutions | เพิ่มแถวภาพ/ข้อความ 2 แถว และปรับ scenic banner เดิม | NovaTrip → B2B Solutions → Neptune แต่ละบริการมีข้อมูลและ CTA ของตัวเอง |
| 5 | Our Destinations | เปลี่ยน tour cards เดิมเป็นการ์ดจุดหมาย | ไม่มีราคา/ระยะเวลาทัวร์; ใช้ภาพประเทศไทยและชื่อจุดหมาย 8 การ์ด |
| 6 | Our Approach | แทนส่วน Journal | Responsible Tourism / Quality / Technology / Local Partnerships เป็น 4 รายการข้อความ |
| 7 | Contact & Partnership | ใช้พื้นที่ contact banner เดิม | ข้อความสำหรับธุรกิจและปุ่ม Business Enquiries / Become a Partner; ทั้งคู่ไป NovaTrip B2B ตาม PDF |
| 8 | Trusted By | เพิ่มแถบโลโก้ก่อน Footer ตามลำดับบรีฟ | โลโก้พาร์ทเนอร์จริง 8 ราย จัดขนาดให้มีน้ำหนักใกล้กัน |
| 9 | Footer | ใช้ Footer เดิมแต่ปรับข้อมูล | Northern All Star, ลิงก์บริการและเมนู; แสดงข้อมูลติดต่อ/โซเชียลเฉพาะที่ได้รับจริง |

ส่วนแกลเลอรี Instagram เดิมรวมเข้ากับ Destinations เพื่อไม่ให้ภาพจุดหมายซ้ำสองชุด ส่วน Tours/Pricing/Offers/Journal เดิมไม่จำเป็นในโครงสร้างบริษัทชุดนี้

## 3. รายละเอียดข้อความแต่ละส่วน

### Hero

ข้อความหลักจาก PDF:

- หัวเรื่อง: **Elevating Thai Travel Experiences**
- ข้อความรอง: **Connecting Travel Experiences, Technology & Global Markets.**
- คำอธิบายบริษัทจาก PDF อยู่ต่อใต้ข้อความรอง หรือใช้ฉบับย่อด้านล่างเพื่อให้ภาพเปิดหน้ากระชับ

คำอธิบายฉบับย่อที่เสนอ (ร่างใหม่จากข้อมูลลูกค้า):

> A Thailand-based travel and technology company connecting curated experiences, digital booking solutions, and local expertise with travelers and business partners worldwide.

ปุ่มที่เสนอ: **Explore Our Brands** → `#brands`; **Partner With Us** → `#contact`

บนเดสก์ท็อปให้หัวเรื่องแบ่ง 2 บรรทัดโดยประมาณ วางซ้ายล่างตาม Figma; มือถือปรับจำนวนบรรทัดและใช้ภาพ crop ที่ยังเห็นบรรยากาศประเทศไทย

### About Northern All Star

ข้อความนำจาก PDF:

> Northern All Star is a Thailand-based travel and technology company connecting local experiences with global markets.

จัดคำอธิบายเต็มจาก PDF เป็น 2 ย่อหน้า โดยแยก mission และการทำงานร่วมกันของ curated travel products / digital booking technology / local operations

Core Values จาก PDF ใช้แทนช่องตัวเลขสถิติ 24+ / 38 / 4.9 เดิม:

1. **Local Expertise** — Authentic experiences backed by strong local knowledge.
2. **Technology-Driven Solutions** — Smarter booking, secure payments, and efficient distribution.
3. **Trusted Partnerships** — Building long-term relationships with local operators and global partners.

ไม่ใช้ปีที่ก่อตั้ง จำนวนประเทศ จำนวนทีมงาน หรือคะแนนรีวิวจากเว็บต้นแบบ เพราะไม่มีข้อมูลเหล่านี้ในบรีฟ

### What We Do

ใช้หัวข้อและคำอธิบายจาก PDF หน้า 3:

1. **Travel Experience & Product Development** — Developing and curating quality travel experiences through trusted local operators and destination partners.
2. **Technology & Distribution** — Connecting travel products with global markets through digital booking platforms, online payment solutions, and B2B distribution networks.
3. **Local Operations & Partner Network** — Supporting seamless travel operations through local expertise, supplier coordination, and dedicated booking support.

แสดงครบ 3 แถว พร้อมเลข 01–03 ตามลักษณะรายการเดิม ลิงก์เสริมสามารถเลื่อนไปยังบริการที่เกี่ยวข้องใน Our Brands ได้ ไม่จำเป็นต้องมีรูปเพิ่มในส่วนนี้

### Our Brands & Solutions

แต่ละแบรนด์มีพื้นที่ของตัวเอง ไม่ย่อเนื้อหาทั้งหมดลงในการ์ดทัวร์เล็ก ๆ

**A. NovaTrip — B2C**

- Headline จาก PDF: **Discover Thailand, All in One Place.**
- รูปด้านซ้าย ข้อความด้านขวา
- แบ่งเนื้อหาจาก PDF เป็น 2 ย่อหน้าสั้น: แพลตฟอร์มรวมประสบการณ์ในไทย + ความสะดวกในการค้นหาและจอง
- แสดงกลุ่มบริการเป็นข้อความสั้น: Island Adventures / Private Boat Tours / Attractions / Local Activities / Transportation
- Closing line จาก PDF: **Explore More. Experience Better. Travel with NovaTrip.**
- CTA จาก PDF: **Explore NovaTrip** → `https://www.novatrip.co`

**B. B2B Travel Solutions**

- Headline จาก PDF: **Powering Travel Business with Smarter Solutions.**
- สลับเป็นข้อความด้านซ้าย ภาพระบบด้านขวา
- แบ่งเนื้อหายาวใน PDF เป็นคำเกริ่นและ 3 จุดเด่น: Booking Management / Online Payments & Distribution / Local Operations & Partner Support
- Closing line จาก PDF: **Technology Meets Local Expertise.**
- CTA จาก PDF: **Discover Our B2B Solutions** → `https://www.novatrip.co/b2b`
- ใช้ภาพหน้าจอระบบจริงเมื่อพร้อม ไม่สร้างภาพ UI สมมติที่ดูเหมือนเป็นฟังก์ชันจริง

**C. Neptune Boat & Leisure**

- Headline จาก PDF: **Premium Marine Experience in Krabi**
- ใช้ scenic banner ภาพใหญ่เดิม เปลี่ยนเป็นภาพเรือและบรรยากาศกระบี่
- แสดงเนื้อหาเรื่อง private longtail boat tours / curated island journeys / personalized service จาก PDF
- CTA จาก PDF: **Discover Neptune Boat & Leisure**
- เสนอให้ CTA ไปหน้าจอง Neptune บน NovaTrip โดยตรงเมื่อมี URL ที่ยืนยันแล้ว; Instagram เป็นลิงก์รองได้ เอกสารยังไม่ได้เลือกปลายทางหรือให้ URL เฉพาะ

### Our Destinations

หัวข้อจาก PDF: **Our Destinations**

คำอธิบายจาก PDF: **Thailand-wide destination network**

เสนอ 8 การ์ด จัด 4 คอลัมน์ × 2 แถวบนจอใหญ่ / 2 คอลัมน์บนแท็บเล็ต / 1–2 คอลัมน์บนมือถือ:

1. Chiang Rai
2. Chiang Mai
3. Bangkok
4. Pattaya & Chonburi
5. Koh Samui
6. Krabi
7. Phang Nga
8. Phuket

PDF ระบุ Pattaya และ Chonburi แยกกัน ข้อเสนอนี้รวมชื่อไว้ในการ์ดเดียวโดยยังแสดงทั้งสองชื่อ หากต้องการแยกตามรายการทุกชื่อ สามารถใช้ 9 การ์ดแบบ 3 × 3 แทน

การ์ดแต่ละใบมีภาพ ชื่อจุดหมาย และคำบรรยายสั้นที่เขียนเพิ่มได้จากข้อมูลจุดหมายที่ยืนยันแล้ว ไม่แสดงราคา ระยะเวลาทริป หรือรายการบริการที่ยังไม่มีข้อมูล ปุ่มรวม **Explore Thailand on NovaTrip** ไป `https://www.novatrip.co` ได้ก่อน ส่วนลิงก์รายจังหวัดใช้เมื่อมี URL จริง

### Our Approach

PDF ระบุเฉพาะหัวข้อ 4 ข้อ ยังไม่มีคำอธิบายเต็ม ข้อความต่อไปนี้เป็นร่างที่เสนอ ไม่ใช่คำรับรองหรือหลักฐานจากลูกค้า:

- **Responsible Tourism** — A considered approach to travel, with respect for local communities and the places we visit.
- **Quality** — Thoughtfully selected experiences, supported by attentive local coordination.
- **Technology** — Practical digital tools that make booking and distribution easier.
- **Local Partnerships** — Working closely with destination partners and local experience providers.

ใช้หัวข้อ + ข้อความสั้น 4 รายการและเส้นแบ่ง ไม่ต้องมีภาพเพิ่ม ไม่เพิ่มตรารับรองหรือข้อกล่าวอ้างด้านสิ่งแวดล้อมที่เอกสารไม่ได้ให้ไว้

### Contact & Partnership

เปลี่ยนจากฟอร์มจองทริปของนักเดินทางเป็นการติดต่อธุรกิจ โดย PDF ต้องการส่งต่อไป NovaTrip B2B จึงเสนอให้ใช้ CTA โดยตรง ไม่จำเป็นต้องมีฟอร์มเดโมซ้ำบนหน้า Northern

Headline ที่เสนอ: **Let’s Grow Travel Together.**

ข้อความที่เสนอ: **Connect with our team to explore business opportunities, travel distribution, and local partnerships across Thailand.**

- **Business Enquiries** → `https://www.novatrip.co/b2b`
- **Become a Partner** → `https://www.novatrip.co/b2b`

ข้อความสองชุดนี้เป็นร่างใหม่จากเป้าหมายใน PDF ส่วนจุดหมาย URL เป็นข้อมูลที่ลูกค้าให้มา ยังไม่ได้ตรวจการทำงานของเว็บปลายทางในรอบวางแผนนี้

รูปใช้ภาพ Hero อีก crop หรือรูป local partnership ที่ได้รับจริง เพื่อลดจำนวนภาพใหม่

### Trusted By / Footer

PDF ให้รายชื่อ: **Klook / GetYourGuide / KKday / Trip.com / CENTRAL PATTAYA / Headout / Pelago / Viator**

ใช้ไฟล์โลโก้จริงจากโฟลเดอร์ที่แนบใน PDF: <https://drive.google.com/drive/folders/17El7eWiPZI0ZNqj8LxCng8xoNn53qc-4?usp=sharing>

ยังไม่ได้ตรวจรายการไฟล์ในโฟลเดอร์นี้ ไม่ต้องสร้างโลโก้ด้วย AI และไม่ดัดแปลงโลโก้ หากไฟล์ต้นฉบับมีแบบสี/ขาวดำ ให้เลือกแบบที่อ่านชัดบนพื้นเว็บ

Footer ใช้ข้อมูล Northern จริงที่ได้รับ ไม่มีเบอร์โทร ที่อยู่ อีเมล `.example` หรือบัญชีโซเชียลจาก VENTURIA หลงเหลือ

## 4. รายการภาพที่ต้องเตรียม

| รหัส | ใช้ที่ไหน | ไฟล์ที่เสนอ | สัดส่วน / ขนาดที่ควรส่ง | ลำดับ |
|---|---|---|---|---|
| P01 | Hero | `hero-thailand.jpg` | 16:9 อย่างน้อย 2560 × 1440; เผื่อ crop จอกว้าง | ก่อน |
| P02 | About | `about-local-expertise.jpg` | 4:3 อย่างน้อย 1600 × 1200 | ก่อน |
| P03 | NovaTrip | `brand-novatrip.jpg` | 4:3 อย่างน้อย 1600 × 1200 | ก่อน |
| P04 | Neptune | `brand-neptune.jpg` | 16:9 อย่างน้อย 2560 × 1440; ควรเป็นภาพเรือจริง | ก่อน |
| P05 | Chiang Rai | `destination-chiang-rai.jpg` | 4:3 อย่างน้อย 1600 × 1200 | หลังภาพหลัก |
| P06 | Chiang Mai | `destination-chiang-mai.jpg` | 4:3 อย่างน้อย 1600 × 1200 | หลังภาพหลัก |
| P07 | Bangkok | `destination-bangkok.jpg` | 4:3 อย่างน้อย 1600 × 1200 | หลังภาพหลัก |
| P08 | Pattaya & Chonburi | `destination-pattaya-chonburi.jpg` | 4:3 อย่างน้อย 1600 × 1200 | หลังภาพหลัก |
| P09 | Koh Samui | `destination-koh-samui.jpg` | 4:3 อย่างน้อย 1600 × 1200 | หลังภาพหลัก |
| P10 | Krabi | `destination-krabi.jpg` | 4:3 อย่างน้อย 1600 × 1200 | หลังภาพหลัก; อาจ crop จาก P01 |
| P11 | Phang Nga | `destination-phang-nga.jpg` | 4:3 อย่างน้อย 1600 × 1200 | หลังภาพหลัก |
| P12 | Phuket | `destination-phuket.jpg` | 4:3 อย่างน้อย 1600 × 1200 | หลังภาพหลัก |

ภาพ P02 ใช้รูปทีม/การทำงานจริงแทนได้ หากใช้ภาพสร้าง ให้เป็นภาพประกอบแนว local expertise ไม่สื่อว่าเป็นพนักงานหรือสำนักงานของ Northern จริง

ไฟล์จริงที่ใช้เพิ่มเติม: โลโก้ Northern / NovaTrip / Neptune (SVG หรือ PNG พื้นโปร่งใส), ภาพหน้าจอ B2B ที่ไม่มีข้อมูลส่วนตัว, โลโก้พาร์ทเนอร์ 8 ราย ไม่มี prompt สำหรับรายการเหล่านี้เพราะควรใช้ต้นฉบับ

## 5. Image prompts พร้อมใช้

วิธีใช้: สร้างทีละภาพ ไม่ทำภาพรวมหลายช่อง ภาพทั้งหมดควรใช้โทนเดียวกัน: แสงธรรมชาติ สีทะเลเขียวอมฟ้า โทนไม้และผิวอบอุ่น สีไม่จัดเกินจริง ไม่มีข้อความหรือโลโก้ฝังในรูป เพราะเว็บจะใส่ตัวอักษรจริงทับเอง

ข้อความกำกับร่วม (แนบต่อท้ายแต่ละ prompt ได้):

> Premium editorial travel photography for a contemporary Thailand travel company. Natural light, realistic colors, warm neutral grading, restrained contrast, believable details, professional photography. One standalone photograph, not a collage. No typography, no logos, no watermarks, no interface elements, no artificial lens flare, no oversaturated HDR.

### P01 — Hero / Thailand

```text
Create one wide editorial travel photograph of the Andaman coast in Krabi, Thailand. View from an elevated coastal viewpoint over turquoise water, layered limestone cliffs, and a small traditional longtail boat in the middle-right distance. Soft early morning light, gentle atmospheric haze, natural tropical greens, refined and welcoming mood. Compose the visual interest mainly in the right half. Keep the lower-left 45 percent calm, dark enough, and visually uncluttered for white website headline text. Avoid a busy shoreline, crowds, or an exaggerated fantasy landscape. Wide 16:9 composition, at least 2560 by 1440 pixels, with generous safe framing for a panoramic desktop crop. Premium editorial travel photography, natural colors, realistic details. No text, no logo, no watermark, no collage.
```

ทางเลือกมือถือ (ทำเพิ่มเมื่อ crop แนวนอนไม่พอ):

```text
Create a companion vertical 9:16 photograph using the same Krabi scene, lighting, palette, and limestone formations as the supplied hero reference. Place the coastline and small longtail boat near the upper-middle area. Keep the lower third calm and darker for white website text. This is a separate mobile composition, not a phone mockup. No text, logo, watermark, or collage.
```

### P02 — About / Local Expertise

```text
Create one candid editorial photograph illustrating local travel expertise in Thailand. A Thai local guide and two adult international travelers having a relaxed conversation beside a wooden longtail boat at a quiet Andaman pier, with limestone hills softly visible in the distance. Capture natural gestures and a genuine moment of planning the day, rather than a posed corporate handshake. Subjects in the middle of the frame, balanced environmental context, warm morning sunlight, natural linen and earth-tone clothing, respectful and professional mood. Horizontal 4:3 composition, at least 1600 by 1200 pixels. Do not present the people as identifiable employees of any company. Premium documentary travel photography, realistic details. No uniform logos, no visible company branding, no text, no watermark.
```

### P03 — NovaTrip / Discover Thailand

```text
Create one inviting editorial photograph of a curated travel experience in Thailand. Two adult travelers enjoying a quiet viewpoint on a southern Thai island, looking out over a clear turquoise bay with a traditional longtail boat offshore and green limestone cliffs in the distance. The travelers should be secondary to the destination, relaxed and naturally photographed, not posing for an advertisement. Convey discovery, ease, and confidence, with bright soft daylight, realistic tropical colors, and warm neutral grading. Horizontal 4:3 composition, at least 1600 by 1200 pixels. Leave generous breathing room around the main subjects. One real-looking scene, not a montage of different destinations. No app screen, no text, no logos, no watermark.
```

### P04 — Neptune / ใช้ภาพเรือจริงเป็น reference

ใช้ prompt นี้เมื่อมีภาพเรือ Neptune จริงให้โมเดลอ้างอิงเท่านั้น หากยังไม่มี ให้ใช้ภาพบรรยากาศทะเลเป็นการชั่วคราวในแบบร่าง โดยไม่ระบุว่าเรือสมมติคือเรือ Neptune

```text
Using the supplied photograph of the actual Neptune boat as the required visual reference, create a premium editorial marine photograph in Krabi, Thailand. Preserve the boat's real hull shape, proportions, canopy, materials, seating layout, and distinctive details exactly. Place the boat in the right half of a wide composition on calm turquoise Andaman water, with believable Krabi limestone cliffs in the background. Soft late-afternoon sunlight, restrained warm highlights, elegant and relaxed mood. Keep the left 40 percent mostly calm water and shaded coastline, suitable for white website text. Do not redesign the vessel, invent amenities, add extra decks, or add fictional logos. Wide 16:9 composition, at least 2560 by 1440 pixels. Realistic photography, no text, no watermark, no collage.
```

### P05 — Chiang Rai

```text
Create one realistic editorial destination photograph of Wat Rong Khun, the White Temple in Chiang Rai, Thailand, showing its recognizable white temple architecture and a calm reflection in the foreground. Soft morning light, pale blue sky, restrained white highlights, subtle natural greens, no crowds in the foreground. Preserve believable architectural geometry and recognizable landmark proportions; do not invent extra temple towers or decorative structures. Balanced horizontal 4:3 composition, main landmark near the center with breathing room for cropping, at least 1600 by 1200 pixels. Premium travel photography with natural warm-neutral grading. No text, logos, watermark, or collage.
```

### P06 — Chiang Mai

```text
Create one realistic editorial destination photograph of a peaceful northern Thai temple setting in Chiang Mai, Thailand. Show recognizable Lanna-style architecture, a golden stupa, weathered terracotta roof details, and lush mountain greenery under soft morning light. Quiet, authentic, and welcoming, with realistic materials and no fantasy architecture. Compose one coherent scene rather than combining unrelated temples. Horizontal 4:3 frame, central subject with generous crop-safe margins, at least 1600 by 1200 pixels. Premium travel photography, natural warm-neutral grading, restrained colors. No text, logos, watermark, or collage.
```

### P07 — Bangkok

```text
Create one realistic editorial destination photograph of Bangkok, Thailand, viewed from the Chao Phraya River with recognizable Wat Arun architecture and a small river boat in the foreground. Soft late-afternoon light, natural river colors, warm highlights on the temple, a lively but uncluttered sense of the city. Maintain believable Bangkok geography and the recognizable form of Wat Arun; do not combine unrelated landmarks into one invented building. Horizontal 4:3 composition, clear central subject, crop-safe framing, at least 1600 by 1200 pixels. Premium travel photography with natural warm-neutral grading. No text, logos, watermark, or collage.
```

### P08 — Pattaya & Chonburi

```text
Create one realistic editorial destination photograph of Pattaya Bay in Chonburi, Thailand, seen from an elevated coastal viewpoint. Show the broad curved bay, a believable coastal city skyline, soft blue sea, and a small amount of lush tropical greenery in the foreground. Pleasant late-afternoon light, refined and inviting mood, realistic scale and geography. Do not turn the coast into an isolated tropical island or add limestone cliffs that do not belong to the scene. Horizontal 4:3 composition, bay centered with generous crop-safe margins, at least 1600 by 1200 pixels. Premium travel photography, restrained warm-neutral grading. No text, logos, watermark, or collage.
```

### P09 — Koh Samui

```text
Create one realistic editorial destination photograph of Koh Samui, Thailand. A quiet palm-fringed beach with pale sand, clear gentle sea, large natural granite rocks near one edge, and softly curving coconut palms. Bright but soft morning light, no crowded beach furniture, no oversized resort buildings, an easy and welcoming island atmosphere. Keep the scene geographically plausible for Koh Samui, without dramatic Andaman limestone cliffs. Horizontal 4:3 composition with balanced foreground and sea, crop-safe framing, at least 1600 by 1200 pixels. Premium travel photography, natural tropical colors, warm-neutral grading. No text, logos, watermark, or collage.
```

### P10 — Krabi

```text
Create one realistic editorial destination photograph of Railay in Krabi, Thailand. A traditional longtail boat near a quiet sandy beach, clear turquoise water, and towering limestone cliffs framed by natural tropical greenery. Soft morning light with believable shadows, refined but authentic travel atmosphere, no crowds or exaggerated fantasy rock formations. Horizontal 4:3 composition with the boat and cliff grouped near the center for flexible cropping, at least 1600 by 1200 pixels. Premium travel photography, natural warm-neutral grading consistent with an elegant Thailand travel website. No text, logos, watermark, or collage.
```

### P11 — Phang Nga

```text
Create one realistic editorial destination photograph of Phang Nga Bay in Thailand, showing layers of distinctive limestone karst islands rising from calm green-blue water. A small sea kayak may appear as a subtle scale reference. Soft early morning haze, quiet depth between the islands, lush natural vegetation, realistic geology and proportions. Avoid an implausible collection of famous landmarks or fantasy rock arches. Horizontal 4:3 composition, central visual balance and crop-safe margins, at least 1600 by 1200 pixels. Premium travel photography, natural warm-neutral grading, restrained contrast. No text, logos, watermark, or collage.
```

### P12 — Phuket

```text
Create one realistic editorial destination photograph of Phuket Old Town, Thailand. A coherent street scene of colorful Sino-Portuguese shophouses with pastel facades, traditional shutters, shaded arcades, and subtle everyday street life. Soft morning sunlight, authentic architectural details, warm but restrained colors, an inviting sense of local culture. Avoid a generic European street or invented giant temple landmarks. Keep any shop signage small and visually unobtrusive, with no prominent readable lettering. Horizontal 4:3 composition, clear central subject and crop-safe margins, at least 1600 by 1200 pixels. Premium travel photography with natural warm-neutral grading. No overlaid text, logos, watermark, or collage.
```

ภาพสถานที่ที่สร้างด้วย AI ต้องตรวจความถูกต้องก่อนใช้จริง โดยเฉพาะวัดและแลนด์มาร์ก หากมีภาพจริงที่เหมาะสม ใช้ภาพจริงแทนได้ทันที

## 6. ลำดับทำงานหลังเลือกแผน

1. ตรวจแผนเนื้อหาและลำดับ 8 ส่วนในเอกสารนี้ โดยยังไม่เปลี่ยนเว็บไซต์
2. เตรียมภาพหลัก P01–P04, โลโก้จริง และภาพหน้าจอ B2B; ภาพ Destinations ส่งตามหลังเป็นชุดได้
3. แทนชื่อบริษัทและเนื้อหาใน HTML ปรับ Brands เป็น 3 บริการ เปลี่ยน Destinations/Approach/Contact และใส่ Partner Logos
4. ใส่รูปจริง crop ให้เหมาะกับแต่ละขนาดหน้าจอ ตรวจลำดับการอ่านบนมือถือ
5. ตรวจ URL ของ NovaTrip/B2B/Neptune และข้อมูลติดต่อจริงก่อนใช้ปุ่มปลายทาง
6. ตรวจว่าภาพต่างประเทศ ราคา สถิติ รีวิว ที่อยู่ และชื่อ VENTURIA จากต้นแบบถูกนำออกครบ พร้อมทดสอบเมนูและ responsive อีกครั้ง

## 7. ข้อมูลที่ยังต้องมีในขั้นลงงาน

- โลโก้ Northern All Star / NovaTrip / Neptune ต้นฉบับ
- ภาพจริงของเรือ Neptune ถ้าต้องการแสดงบริการและตัวเรือจริง
- URL เฉพาะของ Neptune ที่เลือกว่าจะใช้หน้าจองหรือ Instagram
- ภาพหน้าจอ B2B จริงที่เหมาะสำหรับเผยแพร่
- ข้อมูลติดต่อและลิงก์โซเชียล Northern ที่จะใช้จริง
- เนื้อหา Our Approach ฉบับที่ลูกค้าเห็นชอบ หากไม่ใช้ร่างที่เสนอ

รายการนี้เป็นข้อมูลสำหรับใส่ภาพและข้อมูลปลายทางเพิ่มเติม เนื้อหาหน้าเว็บถูกปรับตามแผนแล้ว โดยช่องรอภาพและ URL เฉพาะของ Neptune ระบุขอบเขตไว้ใน README.md
