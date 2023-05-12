'use strict';

const { CategorySchema, CATEGORY_TABLE } = require('./../models/category.models');
const { ProductSchema, PRODUCT_TABLE } = require('./../models/product.models');

/** @type {import('sequelize-cli').Migration} */  //aqui es de donde se van a hacer la creacion de las migraciones
module.exports = {
  async up (queryInterface) {
   await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
   await queryInterface.createTable(PRODUCT_TABLE, ProductSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(CATEGORY_TABLE);
    await queryInterface.dropTable(PRODUCT_TABLE);
  }
};
