# Northern All Star

หน้า HTML/CSS/JavaScript จากเลย์เอาต์ Figma เดิม ปรับเนื้อหาตาม `Northern All Star Website Structure.pdf` แล้ว ไม่มีเฟรมเวิร์กและไม่ต้อง build

## เปิดดู

เปิด `index.html` โดยตรง หรือรัน:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

จากนั้นเปิด <http://127.0.0.1:4173>

## เนื้อหาที่ปรับแล้ว

- Hero, About, Core Values และ What We Do ทั้ง 3 pillars
- Our Brands & Solutions: NovaTrip, B2B Travel Solutions และ Neptune Boat & Leisure
- Our Destinations 8 การ์ด โดยรวม Pattaya และ Chonburi ไว้ด้วยกัน
- Our Approach 4 ข้อ พร้อมคำอธิบายร่างตามแผน
- Contact & Partnership ส่งต่อไป <https://www.novatrip.co/b2b> ตามบรีฟ
- Trusted By แสดงชื่อพาร์ทเนอร์ทั้ง 8 รายจากเอกสาร
- ข้อมูลบริษัท ทัวร์ ราคา สถิติ รีวิว และข้อมูลติดต่อสมมติของต้นแบบถูกนำออก

## ภาพ โลโก้ และสีแบรนด์

ใส่ภาพ P01–P12 ที่ผู้ใช้ส่งมาแล้ว: Hero, About, NovaTrip, Neptune และ Destinations 8 จุดหมาย โดยแปลงภาพถ่ายเป็น WebP รวมประมาณ 4.1 MB จาก PNG ต้นฉบับประมาณ 32.8 MB ภาพเก็บใน `assets/photos/`

ใช้โลโก้ Northern รุ่นสีใน Header และรุ่นขาวใน Footer พร้อมโลโก้ Neptune ไฟล์โลโก้เก็บตามต้นฉบับใน `assets/brands/` แสดงโดยไม่ยืดสัดส่วน ใช้หน้าต่าง CSS ซ่อนขอบแคนวาสว่างของ Northern และใช้ screen blending แสดงรุ่นขาวบนพื้นน้ำเงิน

โลโก้พาร์ทเนอร์ใส่แล้ว 8 ราย ได้แก่ Klook, GetYourGuide, KKday, Trip.com, Central Pattana, Headout, Pelago และ Viator โดย KKday ใช้ SVG สีเดิมจาก [เว็บไซต์ทางการ](https://www.kkday.com/static/en/about/TermsAndConditions.html) ที่ดึงเมื่อ 15 พฤศจิกายน 2026 และไฟล์ Central ที่ได้รับเป็น Central Pattana จึงแสดงตามไฟล์จริง แม้บรีฟเดิมระบุ Central Pattaya ส่วน Trip.com เปลี่ยนจากภาพที่มีลายตารางเป็น [SVG พื้นหลังโปร่งใสจาก Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Trip.com_logo.svg) แล้ว

ใส่ภาพประชาสัมพันธ์ NovaTrip B2B ที่ผู้ใช้ส่งมาแล้วในตำแหน่ง `b2b-platform` แสดงครบทั้งภาพโดยคงสัดส่วนต้นฉบับ ไฟล์ `assets/supplied-assets.json` จับคู่ชื่อไฟล์ต้นฉบับกับไฟล์ที่ใช้งาน

ธีมอิงสีโลโก้ Northern: น้ำเงินตัวอักษร `#002C61`, น้ำเงินในสัญลักษณ์ `#2E418C`, ม่วง `#7869AA` และม่วงอ่อน `#AD87C1` ใช้กับปุ่ม เมนู Contact, Footer และพื้นหลังบางส่วน โลโก้พาร์ทเนอร์คงสีของแต่ละแบรนด์

ตำแหน่งรูปยังมี `data-photo-slot` สำหรับแก้ไขภายหลัง แผนและ prompt อยู่ใน `CONTENT-PLAN.md`

ยังไม่มี URL เฉพาะของ Neptune ในบรีฟ ปุ่ม Discover Neptune จึงเปิดรายละเอียดในหน้า พร้อมลิงก์ที่ระบุชัดว่าไปแพลตฟอร์ม NovaTrip หลัก เมื่อได้ URL หน้าจองหรือ Instagram จริงจึงแทนที่ได้

ข้อความ Hero ย่อย หัวข้อประกอบ และคำอธิบาย Our Approach / Contact เป็นงานเรียบเรียงตามข้อมูลลูกค้า ไม่เพิ่มปีที่ก่อตั้ง จำนวนลูกค้า คะแนนรีวิว หรือตรารับรอง

## ไฟล์

- `index.html`: เนื้อหาและโครงสร้าง
- `styles.css`: รูปแบบจาก Figma และ responsive
- `script.js`: เมนูมือถือและสถานะเมนู; รายละเอียด Neptune ใช้ HTML `details` โดยตรง
- `assets/`: ฟอนต์ รูปและโลโก้ที่ใช้จริง พร้อมไฟล์ภาพต้นแบบเก็บไว้สำหรับอ้างอิง
- `check.py`: ตรวจเนื้อหาตามบรีฟ ลิงก์ เมนู และหน้าจอ 320–1979px

```sh
python3 -m pip install playwright
python3 -m playwright install chromium
python3 check.py
```

ภาพตรวจสอบอยู่ในโฟลเดอร์ชั่วคราว `northern-preview` ของระบบ

ฟอนต์ [General Sans](https://www.fontshare.com/fonts/general-sans) และ [Inter](https://fonts.google.com/specimen/Inter) เก็บใน `assets/` ค่าเริ่มต้นใช้ Inter ให้ตรงกับภาพ Figma ที่เรนเดอร์ General Sans เป็นฟอนต์ทดแทน สามารถเปลี่ยน `--heading` ใน CSS ได้

โลโก้ใน navbar จัดเป็นแนวนอนแล้ว โดยใช้สัญลักษณ์และตัวอักษรจากภาพต้นฉบับ ไม่วาดใหม่ ไฟล์ `assets/brands/northern-horizontal-white.svg` และ `.png` มีพื้นโปร่งใส; Footer ยังคงโลโก้แนวตั้ง

ปุ่ม Watch Video ข้าง CTA ของ NovaTrip และ B2B เปิดวิดีโอตามไฟล์ที่ลูกค้าส่งใน native dialog รองรับปุ่มปิด, Escape และคลิกพื้นที่ด้านนอก เมื่อปิดจะหยุดเล่นและคืนโฟกัสให้ปุ่มเดิม ไฟล์ใน `assets/videos/` ใช้ H.264/AAC ต้นฉบับและย้าย metadata ไว้ต้นไฟล์ (fast start) โดยไม่บีบอัดซ้ำ โหลดวิดีโอเมื่อกดปุ่มเท่านั้น
