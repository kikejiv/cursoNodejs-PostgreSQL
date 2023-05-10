//este archivo se encargara de enviar la conexion hacia los modelos
const { User, UserSchema } = require('./user.models');
const { Customer, CustomerSchema } = require('./customer.models');
const { Product, ProductSchema } = require('./product.models');
const { Category, CategorySchema } = require('./category.models');

function setupModels(sequelize) {
  User.init( UserSchema, User.config(sequelize));
  Customer.init( CustomerSchema, Customer.config(sequelize));
  Product.init( ProductSchema, Product.config(sequelize));
  Category.init( CategorySchema, Category.config(sequelize));

  Customer.associate(sequelize.models); //desde que aqui se realiza la relacion
}

module.exports = setupModels;
