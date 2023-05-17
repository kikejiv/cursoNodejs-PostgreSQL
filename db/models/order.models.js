const { Model, DataTypes, Sequelize } = require('sequelize');
const { CUSTOMER_TABLE } = require('./customer.models');

const ORDER_TABLE = 'orders';

const OrderSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  customerId: {
    fields: 'customer_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    reference: {
      model: CUSTOMER_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  total:{
    type: DataTypes.VIRTUAL, //se pone como cmpo virtual para que le atributo no viva en la tabla de la bd
    get() { //con el get se especifica como se va a calcular el campo
      if (this.item.length > 0) {
        return this.item.reduce((total, item) => { //se utiliza la funcion reduce la cual  todo a un solo valor el cual seria total
          return total + (item.price * item.OrderProduct.amount);
        }, 0);
      }
      return 0;
    }
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


class Order extends Model {

  static associate(models) { //de4sde esta linea se realiza la asociasin de las tablas
    this.belongsTo(models.Customer, {  //con esta linea declaro que la tabla customer esta asociada con la user
      as: 'customer',
    });
    this.belongsToMany(models.Product, { //de esta manera resolvemos la asociacion de muchos a muchos entre order y product
      as: 'item',
      through: models.OrderProduct,
      foreignKey: 'orderId',
      otherKey: 'productId'
    });

  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ORDER_TABLE,
      modelName: 'Order',
      timestamp: false
    }
  }
}
module.exports = { ORDER_TABLE, OrderSchema, Order  }
