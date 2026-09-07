# Write-Up: Penemuan Endpoint Supabase pada Website Soedirman Robotic Team

## 1. Informasi Target
- **Target URL:** `https://www.soedirmanrobotic.com/`
- **Framework:** Next.js (App Router / Turbopack)
- **Teknologi Backend/BaaS:** Supabase

---

## 2. Metodologi Reconnaissance

### Langkah 1: Analisis Halaman Utama & Struktur Next.js
Pada inspeksi awal source code HTML halaman utama (`/`), Next.js memuat beberapa file JavaScript chunk static di bawah direktori `/_next/static/chunks/`.

### Langkah 2: Pemetaan Route / Halaman Web
Melalui pengecekan tautan internal pada navigasi dan footer, ditemukan sejumlah rute yang tersedia pada website:
- `/`
- `/achievements`
- `/oprec`
- `/announcement-oprec`
- `/internship`
- `/krti-teams`
- `/kri-teams`
- `/pengmas`
- `/managementTeam`

### Langkah 3: Ekstraksi dan Analisis Chunk Bundle JavaScript
Pada halaman registrasi `/internship`, aplikasi memuat chunk spesifik:
- `/_next/static/chunks/02o8t47~ydy-t.js`

Di dalam chunk JavaScript tersebut, ditemukan inisialisasi `@supabase/supabase-js` client secara eksplisit:

```javascript
let sl = new so(
  "https://fsrjbkdsbppvpuvvsdoa.supabase.co",
  "sb_publishable_E9ZIdMRouwctvJqJyvp79A_AemCf_90",
  void 0
);
```

---

## 3. Hasil Temuan (Findings)

### A. Kredensial & Endpoint Supabase
| Parameter | Nilai |
| :--- | :--- |
| **Supabase Base URL** | `https://fsrjbkdsbppvpuvvsdoa.supabase.co` |
| **Project Reference ID** | `fsrjbkdsbppvpuvvsdoa` |
| **Publishable / Anon Key** | `sb_publishable_E9ZIdMRouwctvJqJyvp79A_AemCf_90` |

### B. Endpoint Layanan Supabase
- **REST API (PostgREST):**
  ```text
  https://fsrjbkdsbppvpuvvsdoa.supabase.co/rest/v1/
  ```
- **Auth Service (GoTrue):**
  ```text
  https://fsrjbkdsbppvpuvvsdoa.supabase.co/auth/v1/
  ```
- **Storage API:**
  ```text
  https://fsrjbkdsbppvpuvvsdoa.supabase.co/storage/v1/
  ```
- **Realtime Service:**
  ```text
  wss://fsrjbkdsbppvpuvvsdoa.supabase.co/realtime/v1/websocket
  ```

### C. Resource Database & Storage yang Teridentifikasi
Berdasarkan query method `.from(...)` dan `.storage.from(...)` pada kode bundle frontend:
1. **Tabel Database:**
   - `internship_registrations` — Menyimpan data pendaftaran formulir magang (*field*: `email`, `nama`, `nim`, `jurusan`, `angkatan`, `no_telp`, `alasan_gabung`, `pilihan_1`, `sub_pilihan_1`, `alasan_1`, `pilihan_2`, `sub_pilihan_2`, `alasan_2`, `cv_url`, `bukti_url`).
   - `cv_uploads`
2. **Storage Bucket:**
   - `cv_uploads` — Bucket untuk upload dokumen CV pelamar.

---

## 4. Contoh Verifikasi Request

### Request ke PostgREST API
```bash
curl -i -X GET 'https://fsrjbkdsbppvpuvvsdoa.supabase.co/rest/v1/internship_registrations?select=*' \
  -H "apikey: sb_publishable_E9ZIdMRouwctvJqJyvp79A_AemCf_90" \
  -H "Authorization: Bearer sb_publishable_E9ZIdMRouwctvJqJyvp79A_AemCf_90"
```

### Request OpenAPI Specification / Schema
```bash
curl -i -X GET 'https://fsrjbkdsbppvpuvvsdoa.supabase.co/rest/v1/' \
  -H "apikey: sb_publishable_E9ZIdMRouwctvJqJyvp79A_AemCf_90"
```

---

## 5. Rekomendasi Keamanan
1. **Row Level Security (RLS):** Pastikan tabel `internship_registrations` mengaktifkan RLS dengan kebijakan `INSERT` saja untuk publik (`anon`), serta melarang akses `SELECT`, `UPDATE`, dan `DELETE` secara publik guna mencegah kebocoran Personally Identifiable Information (PII).
2. **Storage Bucket Policies:** Pastikan bucket `cv_uploads` membatasi izin baca langsung (public read) jika CV memuat berkas atau data pribadi pelamar.
