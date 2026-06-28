# RH Digital Static Website

Website production static tanpa Vite, tanpa React dan tanpa Node.js.

## Deploy ke Cloudflare Pages

1. Upload semua fail ke GitHub repository.
2. Cloudflare Pages > Create Project > Connect GitHub.
3. Build command: kosongkan.
4. Output directory: `/` atau kosong.
5. Deploy.

## Supabase

1. Buka Supabase SQL Editor.
2. Jalankan `supabase/schema.sql`.
3. Salin `assets/js/config.example.js` kepada `assets/js/config.js`.
4. Masukkan `RH_SUPABASE_URL` dan `RH_SUPABASE_ANON_KEY`.
5. Tambah `<script src="assets/js/config.js"></script>` sebelum `assets/js/main.js` dalam setiap halaman yang ada borang.

## Struktur

- `index.html` — laman utama penuh
- `assets/css/style.css` — styling utama
- `assets/js/main.js` — menu, animasi, lead form
- `assets/images/` — logo, favicon, preview
- `supabase/schema.sql` — database + RLS policies
- `admin/` — asas dashboard admin
