import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { pool } from "./db.js";

dotenv.config();
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

app.post("/chat", async (req, res) => {
  let { message } = req.body;
  if (!message) return res.json({ reply: "Pesan kosong!" });

  message = message.toLowerCase().trim();
  console.log("📩 Pertanyaan:", message); // Debug log

  try {
    // ✅ Respon sapaan
    const greetings = ["halo", "hai", "hello", "hi", "apa kabar"];
    if (greetings.some((greet) => message.includes(greet))) {
      return res.json({
        reply:
          "Halo juga! 👋 AgroBotIV siap bantu kamu cari informasi tentang PTPN IV 😊",
      });
    }

    // ✅ Pertanyaan umum 'apa itu ptpn iv'
    const definisiTriggers = ["apa itu ptpn iv", "tentang ptpn iv", "ptpn iv"];
    if (definisiTriggers.some((trigger) => message.includes(trigger))) {
      const query = await pool.query(
        "SELECT * FROM links WHERE name ILIKE '%profil%' LIMIT 1"
      );
      if (query.rows.length > 0) {
        const row = query.rows[0];
        return res.json({
          reply: `${row.description}<br/>👉 <a href="${row.url}" target="_blank">${row.name}</a>`,
        });
      }
    }

    // ✅ Pencocokan berdasarkan keyword dalam database
    const result = await pool.query("SELECT * FROM links");
    for (let row of result.rows) {
      if (!row.keyword) continue;
      for (let keyword of row.keyword) {
        if (message.includes(keyword.toLowerCase())) {
          return res.json({
            reply: `${row.description}<br/>👉 <a href="${row.url}" target="_blank">${row.name}</a>`,
          });
        }
      }
    }

    // ❌ Tidak cocok apapun
    return res.json({
      reply: `Maaf, AgroBotIV hanya bisa menjawab topik seputar <strong>PTPN IV</strong>. Coba ketik seperti: <em>profil, berita, unit usaha</em>, dll. 🙏`,
    });
  } catch (err) {
    console.error("❌ ERROR:", err.message);
    res.status(500).json({ reply: "Terjadi kesalahan di sisi server." });
  }
});

app.listen(port, () => {
  console.log(`✅ Server aktif di http://localhost:${port}`);
});
