# Windows VPS: northernallstar.com

เว็บใหม่เป็น static HTML/CSS/JavaScript ใช้ Node.js รัน `server.js` ได้ทันที ไม่ต้อง `npm install` หรือ build รองรับ HTTP byte ranges สำหรับเลื่อนวิดีโอ

ข้อมูลที่ยืนยันจาก VPS:

- เว็บเดิม: `C:\apps\northern-landing`
- repo เดิม: `https://github.com/6catdev/northern-new-landing-page.git`
- PM2 เดิม: `northern-landing`, รัน Next.js ด้วย `start -p 3003`
- มี `package-lock.json` ที่แก้ในเครื่องและ `server.js` ที่ยังไม่เข้า Git จึงเก็บโฟลเดอร์เดิมไว้ทั้งชุด
- เว็บใหม่: `C:\apps\northern-2026`, PM2 ชื่อ `northern-2026`, พอร์ต `3003`

## ติดตั้งและตรวจเว็บใหม่ก่อนสลับ

ใช้ Command Prompt บน VPS บัญชีเดิมที่รัน PM2:

```bat
cd /d C:\apps
git clone https://github.com/6catdev/northern-2026.git northern-2026
cd /d C:\apps\northern-2026
node --test server.test.js
```

ถ้า clone หรือการทดสอบไม่ผ่าน ให้หยุดตรงนี้ เว็บเดิมยังทำงานอยู่

ทดลองเว็บใหม่ที่พอร์ตชั่วคราวในหน้าต่าง CMD เดียวกัน:

```bat
set PORT=3004
node server.js
```

เปิด `http://localhost:3004` ผ่านเบราว์เซอร์บน VPS ตรวจรูป เมนู และวิดีโอทั้งสองปุ่ม เสร็จแล้วกด Ctrl+C และล้างพอร์ตชั่วคราว:

```bat
set PORT=
```

## สลับพอร์ต 3003

ก่อนสลับ บันทึกสภาพรายการโปรเซสเดิม:

```bat
pm2 save
```

รันทีละคำสั่ง ถ้า `pm2 stop` ไม่สำเร็จให้หยุด ถ้า `pm2 start` ไม่สำเร็จให้ใช้คำสั่งย้อนกลับด้านล่างทันที:

```bat
pm2 stop northern-landing
pm2 start ecosystem.config.cjs --only northern-2026
pm2 describe northern-2026
curl.exe -I http://127.0.0.1:3003/
curl.exe -I http://127.0.0.1:3003/assets/videos/novatrip.mp4
```

เปิด `http://localhost:3003` บน VPS แล้วเปิด `https://northernallstar.com/` ตรวจว่าขึ้นหน้าใหม่และวิดีโอเล่น/เลื่อนได้ เมื่อผ่านแล้วจึงบันทึก:

```bat
pm2 save
```

พอร์ตต้นทางยังเป็น 3003 จึงคง reverse proxy และ DNS เดิมได้ถ้า proxy ส่งคำขอเข้าพอร์ตนี้ตามที่ใช้อยู่ ตรวจโดเมนจริงก่อนสรุปว่า deploy สำเร็จ ไม่ต้องลบโปรเซสหรือโฟลเดอร์เก่า และไม่ต้องรัน `git reset --hard` บนเว็บเดิม

## ย้อนกลับ

```bat
pm2 stop northern-2026
pm2 restart northern-landing
pm2 save
```

## อัปเดตครั้งต่อไป

เมื่อไม่มีการแก้ไฟล์เฉพาะบน VPS:

```bat
cd /d C:\apps\northern-2026
git pull --ff-only origin main
node --test server.test.js
pm2 restart northern-2026
```

รัน restart เฉพาะเมื่อ pull และทดสอบผ่าน แล้วตรวจโดเมนอีกครั้ง อย่าใช้คำสั่งที่ล้างไฟล์เมื่อ pull แจ้งว่ามี local changes
