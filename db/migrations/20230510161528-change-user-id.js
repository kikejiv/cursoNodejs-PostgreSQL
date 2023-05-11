//este formato de migracion se utiliza para actualizar o insertar cambios en una columna
'use strict';

const { DataTypes} = require('sequelize');
const { CUSTOMER_TABLE } = require('./../models/customer.models');

/** @type {import('sequelize-cli').Migration} */  //aqui es de donde se van a hacer la creacion de las migraciones
module.exports = {
  async up (queryInterface) {
   await queryInterface.changeColumn(CUSTOMER_TABLE, 'userId', {
    fields: 'user_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
   });
  },

  async down (queryInterface) {
   // await queryInterface.dropTable(CUSTOMER_TABLE);
  }
};
