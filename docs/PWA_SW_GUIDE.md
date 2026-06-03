# PWA & Service Worker

Fail baharu ditambah:

- `manifest.json`
- `sw.js`
- `index.html`
- `assets/icons/icon.svg`
- `assets/icons/icon-192.png`
- `assets/icons/icon-512.png`

## Cara test PWA

1. Upload semua fail ke hosting HTTPS.
2. Buka `game-play01.html`.
3. Browser akan daftar `sw.js`.
4. Di Chrome/Android akan keluar pilihan Install App.
5. Untuk update versi, naikkan `CACHE_VERSION` dalam `sw.js`.

## Nota penting

`question-bank.json` guna network-first supaya perubahan Admin Panel cepat refresh.
Asset lain guna cache-first supaya game ringan dan boleh buka semula dengan lebih cepat.
