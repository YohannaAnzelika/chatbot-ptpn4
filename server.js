// ======== server.js ========
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
  console.log("📩 Pertanyaan:", message);

  try {
    // Data dari DB
    const result = await pool.query("SELECT * FROM links");
    const allLinks = result.rows;

    // Respon sapaan + kata kunci
    const greetings = [
      "halo",
      "hai",
      "hello",
      "hi",
      "apa kabar",
      "selamat pagi",
      "selamat siang",
      "selamat sore",
      "selamat malam",
      "terimakasih",
    ];
    if (greetings.some((g) => message.includes(g))) {
      return res.json({
        reply: "Hai! Ada yang bisa AgroBotIV bantu? 🤖",
        options: allLinks.map((link) => ({ label: link.name, url: link.url })),
      });
    }

    // Kalau minta semua opsi secara eksplisit
    if (message.includes("semua opsi")) {
      return res.json({
        reply: "Berikut informasi sistem dan aplikasi yang tersedia:",
        options: allLinks.map((link) => ({ label: link.name, url: link.url })),
      });
    }

    // Pencarian link berdasarkan keyword
    for (let row of allLinks) {
      if (!row.keyword) continue;
      for (let keyword of row.keyword) {
        if (message.includes(keyword.toLowerCase())) {
          return res.json({
            reply: `${
              row.description ?? "Berikut link yang relevan"
            }<br/><br/>🔗 <a href="${row.url}" target="_blank">${row.name}</a>`,
            options: [{ label: "📚 Lihat semua opsi sistem", special: true }],
          });
        }
      }
    }

    // Kalau tidak ketemu apapun
    return res.json({
      reply: `Maaf, informasi yang kamu cari belum tersedia. Coba pilih salah satu opsi berikut ini:`,
      options: allLinks.map((link) => ({ label: link.name, url: link.url })),
    });
  } catch (err) {
    console.error("❌ ERROR:", err.message);
    res.status(500).json({ reply: "Terjadi kesalahan di sisi server." });
  }
});

app.listen(port, () => {
  console.log(`✅ Server aktif di http://localhost:${port}`);
});
