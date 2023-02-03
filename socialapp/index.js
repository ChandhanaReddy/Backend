const express = require("express");

const app = express();

const PORT = 8080 || process.env.PORT;

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/api/v1/instagram", (req, res) => {
  const instaSocial = {
    username: "idreamofrainbowss",
    followers: 35,
    follows: 80,
    date: Date.now(),
  };
  res.status(200).json({ instaSocial });
});
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
