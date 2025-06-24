# 🤖 AgroBotIV – Chatbot Navigasi Aplikasi Internal PTPN IV

AgroBotIV adalah chatbot berbasis web yang dirancang untuk membantu pengguna menavigasi berbagai portal aplikasi internal milik PTPN IV secara cepat dan interaktif. Dibangun menggunakan Node.js dan Express di sisi backend, serta HTML, CSS, dan JavaScript murni di sisi frontend.

---

## ✨ Fitur Utama

- 🚀 **Respon otomatis berdasarkan keyword** (kata kunci seperti "IMS", "bibit", "TBS", dll.)
- 🌐 **Mengarahkan ke lebih dari 20 aplikasi internal** PTPN IV melalui link yang relevan
- 💬 **Antarmuka chatbot interaktif** dengan tampilan bersih dan responsif
- 🔒 Tidak menggunakan database, cukup ringan dan cepat untuk di-deploy

---

## 🧱 Teknologi yang Digunakan

| Komponen | Teknologi                       |
| -------- | ------------------------------- |
| Frontend | HTML, CSS, JavaScript (Vanilla) |
| Backend  | Node.js, Express.js             |
| Runtime  | Node.js 18+                     |

---

## 🚀 Cara Menjalankan (Local Development)

1. **Clone repository:**
   ```bash
   git clone https://github.com/YohannaAnzelika/chatbot-ptpn4.git
   cd chatbot-ptpn4
   ```
2. **Instal dependensi:**

   ```bash
   npm install

   ```

3. **Mulai server:**

   ```bash
   node server.js

   ```

4. **Buka browser dan akses:**

   ```bash
   http://localhost:3000

   ```

## 🗂️ Struktur Proyek

```plaintext
chatbot-ptpn4/
├── public/
│   └── index.html           # Tampilan UI chatbot
├── chatbot.js               # Logika balasan berdasarkan kata kunci
├── server.js                # Server backend Express.js
├── package.json             # Konfigurasi dan dependensi project
└── README.md                # Dokumentasi proyek
```

## 💡 Contoh Kata Kunci yang Didukung

| Kata Kunci                  | Aksi                          |
| --------------------------- | ----------------------------- |
| `profil`, `beranda`         | Menuju situs resmi PTPN IV    |
| `IMS`, `mutu`               | Menuju portal IMS             |
| `bibit`, `perkebunan`       | Menuju Portal Bibit           |
| `TBS`, `harga tbs`          | Menuju aplikasi Pembelian TBS |
| `tanam ulang`, `replanting` | Menuju Dashboard Tanam Ulang  |
| `meeting`, `rapat`          | Menuju sistem Booking Rapat   |
| ...dan masih banyak lagi!   |                               |

## 🧾 Lisensi

Proyek ini dikembangkan untuk tujuan Kerja Praktik (Magang) di PTPN IV – Divisi Regional II Sumatera Utara.
Seluruh hak cipta aplikasi internal PTPN IV tetap dimiliki oleh instansi terkait.

## 👩‍💻 Kontributor

Yohanna Anzelika Sitepu
Mahasiswa Informatika
Institut Teknologi Sumatera (ITERA)

---

📧 Email: yohanna.122140010@student.itera.ac.id
💼 LinkedIn: linkedin.com/in/yohanna-anzelika-sitepu-401578229
📸 Instagram: @yohannalika
💻 GitHub: @YohannaAnzelika
