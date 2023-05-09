'use strict';

const { UserSchema, USER_TABLE } = require('./../models/user.models');

/** @type {import('sequelize-cli').Migration} */  //aqui es de donde se van a hacer la creacion de las migraciones
module.exports = {
  async up (queryInterface) {
   await queryInterface.createTable(USER_TABLE, UserSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(USER_TABLE, UserSchema);
  }
};
