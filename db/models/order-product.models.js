const { Model, DataTypes, Sequelize } = require('sequelize');

const { ORDER_TABLE } = require('./order.models');
const { PRODUCT_TABLE } = require('./product.models');

const ORDER_PRODUCT_TABLE = 'order_product';

const OrderProductSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  orderId: {
    fields: 'order_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    reference: {
      model: ORDER_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  productId: {
    fields: 'product_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    reference: {
      model: PRODUCT_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  amount: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'update_at',
    defaultValue: Sequelize.NOW
  }
}


class OrderProduct extends Model {

  static associate(models) {

    };

  static config(sequelize) {
    return {
      sequelize,
      tableName: ORDER_PRODUCT_TABLE,
      modelName: 'OrderProduct',
      timestamp: false
    }
  }
}
module.exports = { ORDER_PRODUCT_TABLE, OrderProductSchema, OrderProduct  }
