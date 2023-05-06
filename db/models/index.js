//este archivo se encargara de enviar la conexion hacia los modelos
const { User, UserSchema } = require('./user.models');
const { Product, ProductSchema } = require('./product.models');
const { Category, CategorySchema } = require('./category.models');

function setupModels(sequelize) {
  User.init( UserSchema, User.config(sequelize));
  Product.init( ProductSchema, Product.config(sequelize));
  Category.init( CategorySchema, Category.config(sequelize));
}

module.exports = setupModels;
