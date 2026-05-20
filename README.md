# Chương 4 — Dân chủ XHCN (MLN131)

Web tĩnh **React + Vite** — bài thuyết trình Phần I.1 theo mockup Chương 4. Không backend, không đăng nhập.

## Trang

| URL | Nội dung |
|-----|----------|
| `/` | Trang chủ — hero, trích dẫn, cấu trúc chương |
| `/khai-niem` | Quan niệm về dân chủ (I.1.a) |
| `/lich-su` | Tiến trình lịch sử (gồm dân chủ XHCN) |

## Dữ liệu (chỉnh nội dung tại đây)

| File | Mục đích |
|------|----------|
| `src/data/siteContent.js` | Menu, footer, URL ảnh hero & Parthenon |
| `src/data/chuong4TrangChu.js` | Trang chủ |
| `src/data/chuong4KhaiNiem.js` | Khái niệm, Mác–Lênin, Hồ Chí Minh |
| `src/data/chuong4LichSu.js` | 5 giai đoạn + tóm tắt slide |

## Chạy

```bash
cd e:\MLN131\MLN131ASM
npm run dev
```

## Build

```bash
npm run build
```

Output: `dist/` — deploy Vercel, GitHub Pages, v.v.
