const express = require("express");
const cors = require("cors");
const app = express();
const pizzas = require("./data/pizzas");
const pizzaSchema = require("./validation/pizzaSchema");

app.use(cors());
app.use(express.json()); // to parse JSON bodies


app.get("/api/pizzas", (req, res) => {
  res.json(pizzas);
});

app.post("/api/pizzas", (req, res) => {
  const { error, value } = pizzaSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const newPizza = {
    _id: pizzas.length > 0 ? pizzas[pizzas.length - 1]._id + 1 : 1,
    ...value,
  };

  pizzas.push(newPizza);

  res.status(201).json(newPizza);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});