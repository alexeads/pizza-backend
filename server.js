const express = require("express");
const cors = require("cors");
const app = express();
const pizzas = require("./data/pizzas");

app.use(cors());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/api/pizzas", (req, res) => {
  res.json(pizzas);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});