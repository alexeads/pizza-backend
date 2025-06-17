const Joi = require("joi");

const pizzaSchema = Joi.object({
  name: Joi.string().min(2).required(),
  size: Joi.array().items(Joi.string()).required(),
  price: Joi.array().items(Joi.string()).required(),
  toppings: Joi.array().items(Joi.string()).required(),
  img_name: Joi.string().required()
});

module.exports = pizzaSchema;