# Panduan Deploy KonekDin Menggunakan Docker di VPS

Repository ini telah dikonfigurasi dengan Docker agar mudah dideploy di VPS Linux (Ubuntu/Debian/CentOS).

---

## Prasyarat di VPS
Sebelum memulai, pastikan VPS Anda sudah terinstall:
1. **Docker**: [Panduan Instalasi Docker](https://docs.docker.com/engine/install/)
2. **Docker Compose**: [Panduan Instalasi Docker Compose](https://docs.docker.com/compose/install/)

---

## Langkah 1: Clone Repositori di VPS
Masuk ke VPS Anda dan clone project Anda:
```bash
git clone <URL_REPOSITORI_ANDA> konekdin
cd konekdin
```

---

## Langkah 2: Konfigurasi Environment (`.env`)
Untuk produksi, Anda harus membuat file `.env` di server. Anda bisa menyalin dari `.env.example` atau langsung membuat konfigurasi yang sesuai:

```bash
cp .env.example .env
```

Lalu sesuaikan nilai-nilai berikut di dalam `.env`:
*   `APP_ENV=production`
*   `APP_DEBUG=false`
*   `APP_URL=http://<IP_VPS_ATAU_DOMAIN_ANDA>`
*   `DB_HOST=db` (Gunakan `db` karena ini adalah nama service database di docker-compose)
*   `DB_DATABASE=konekdin`
*   `DB_USERNAME=konekdin_user`
*   `DB_PASSWORD=<PASSWORD_PRODUKSI_YANG_KUAT>`
*   `JWT_SECRET=<JWT_SECRET_BARU>`
*   `GEMINI_API_KEY=<API_KEY_GEMINI_PRODUKSI>`

> [!IMPORTANT]  
> Jangan lupa untuk menggenerate application key yang baru dan aman jika belum diset:
> ```bash
> docker compose run --rm app php artisan key:generate
> ```
> Serta generate JWT secret key jika diperlukan:
> ```bash
> docker compose run --rm app php artisan jwt:secret
> ```

---

## Langkah 3: Build & Jalankan Container
Jalankan perintah berikut untuk membuild image dan menjalankan container di latar belakang (detached mode):

```bash
docker compose up -d --build
```

Perintah ini akan secara otomatis:
1. Mengunduh dependensi Node.js & membuild aset frontend (CSS/JS) lewat Vite.
2. Mengunduh dependensi PHP lewat Composer.
3. Menyiapkan database MySQL.
4. Menjalankan migrasi database (`php artisan migrate --force`) karena `RUN_MIGRATIONS=true` diset di `docker-compose.yml`.
5. Menjalankan Nginx, PHP-FPM, dan Queue Worker melalui Supervisor.

---

## Langkah 4: Seed Database (Jika Diperlukan)
Jika ini adalah instalasi pertama dan Anda ingin menjalankan seeder database untuk mengisi data awal:

```bash
docker compose exec app php artisan db:seed --force
```

---

## Langkah 5: Mengelola Services (Perintah Bermanfaat)

### Melihat Logs
Melihat log dari seluruh container secara real-time:
```bash
docker compose logs -f
```

Melihat log dari aplikasi Laravel saja:
```bash
docker compose logs -f app
```

### Menghentikan Container
Untuk mematikan container tanpa menghapus data database/storage:
```bash
docker compose down
```

Untuk mematikan container dan menghapus semua volume data (Hati-hati! Ini menghapus data database):
```bash
docker compose down -v
```

### Masuk ke dalam Container Aplikasi (Bash)
Jika Anda perlu masuk ke terminal container untuk menjalankan perintah artisan lainnya:
```bash
docker compose exec app bash
```

---

## Langkah 6: Konfigurasi SSL (HTTPS) menggunakan Nginx Reverse Proxy (Direkomendasikan)
Di VPS, sangat direkomendasikan untuk menggunakan reverse proxy eksternal (seperti Nginx bawaan VPS atau Caddy) untuk mengarahkan port `80` (dan `443` dengan SSL) ke port internal docker `8000`.

### Contoh Konfigurasi Nginx di VPS (`/etc/nginx/sites-available/konekdin`):
```nginx
server {
    listen 80;
    server_name domainanda.com;

    location / {
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Setelah itu, gunakan **Certbot** untuk menginstall SSL gratis dari Let's Encrypt:
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d domainanda.com
```
