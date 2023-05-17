const boom = require('@hapi/boom');

//const pool = require('../libs/postgres.pool');
const { models } = require('./../libs/sequelize')

class OrderService {

  constructor(){

  }
  async create(data) {
    const newOrder = await models.Order.create(data)
    return newOrder;
  }

  async find() {
    const orders = await models.Order.findAll();
    return orders;
  }

  async findOne(id) {
    const order = await models.Order.findByPk(id, {
      include: ['customer']
    });
    if (!order) {
      throw boom.notFound('Order Not Found');
    }
    return order;
  }


  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }

}

module.exports = OrderService;
