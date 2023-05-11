const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(30);
const lastName = Joi.string().min(3);
const phone = Joi.number().integer().min(10);
const email = Joi.string().email();
const userId = Joi.number().integer();
const password = Joi.string();

const createCustomerSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  phone: phone.required(),
  email: email.required(),
  user: Joi.object ({
    email: email.required(),
    password: password.required()
  })
});

const updateCustomerSchema = Joi.object({
  name,
  lastName,
  email,
  phone,
  userId
});

const getCustomerSchema = Joi.object({
  id: id.required(),
});

module.exports = { createCustomerSchema, updateCustomerSchema, getCustomerSchema }
