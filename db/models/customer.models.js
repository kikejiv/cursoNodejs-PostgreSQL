const { Model, DataTypes, Sequelize} = require('sequelize');
const { USER_TABLE } = require('./user.models');

const CUSTOMER_TABLE = 'customer';

const CustomerSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  lastName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'last_name'
  },
  phone: {
    allowNull: false,
    type: DataTypes.STRING
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at'
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'update_at'
  }, // desde aqui se crea el esquema o la columna que se asocia con la tabla y este lleva la llave foranea
  userId: {
    fields: 'user_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
    reference: {
      model: USER_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class Customer extends Model {

  static associate(models) { //de4sde esta linea se realiza la asociasin de las tablas
    this.belongsTo(models.User, {as: 'user'}); //con esta linea declaro que la tabla customer esta asociada con la user
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CUSTOMER_TABLE,
      modelName: 'Customer',
      timestamp: false
    }
  }
}

module.exports = { CUSTOMER_TABLE, CustomerSchema, Customer }
