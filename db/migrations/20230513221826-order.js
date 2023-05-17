'use strict';

const { OrderSchema, ORDER_TABLE } = require('./../models/order.models');

/** @type {import('sequelize-cli').Migration} */  //aqui es de donde se van a hacer la creacion de las migraciones
module.exports = {
  async up (queryInterface) {
   await queryInterface.createTable(ORDER_TABLE, OrderSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(ORDER_TABLE);
  }
};
