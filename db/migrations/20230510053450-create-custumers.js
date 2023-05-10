'use strict';

const { CustomerSchema, CUSTOMER_TABLE } = require('./../models/customer.models');

/** @type {import('sequelize-cli').Migration} */  //aqui es de donde se van a hacer la creacion de las migraciones
module.exports = {
  async up (queryInterface) {
   await queryInterface.createTable(CUSTOMER_TABLE, CustomerSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(CUSTOMER_TABLE);
  }
};
