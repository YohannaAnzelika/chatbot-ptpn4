// server.js
const express = require("express");
const app = express();
const port = 3000;

const { getReply } = require("./chatbot"); // pastikan path-nya benar

app.use(express.static("public"));
app.use(express.json());

app.post("/chat", (req, res) => {
  const { message } = req.body;
  const reply = getReply(message);
  res.json({ reply });
});

app.listen(port, () => {
  console.log(`Server aktif di http://localhost:${port}`);
});
