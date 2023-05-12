const { Model, DataTypes, Sequelize } = require('sequelize');

const CATEGORY_TABLE = 'categories';

const CategorySchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
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
class Category extends Model {

  static associate(models) { //de4sde esta linea se realiza la asociasin de las tablas
    this.hasMany(models.Product, {
      as: 'products',
      foreignKey: 'categoryId'
    }); //con esta linea declaro que la tabla customer esta asociada con la user
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CATEGORY_TABLE,
      modelName: 'Category',
      timestamp: false
    }
  }
}
module.exports = { CATEGORY_TABLE, CategorySchema, Category  }
