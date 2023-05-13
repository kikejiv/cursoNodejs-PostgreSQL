const boom = require('@hapi/boom');

const pool = require('../libs/postgres.pool');

class OrderService {

  constructor(){
    this.pool = pool;
    this.pool.on('error', (err) => console.error(err));
  }
  async create(data) {
    return data;
  }

  async find() {
    const query = 'SELECT * FROM tasks';
    const rta = await pool.query(query);
    return rta.rows;
  }

  async findOne(id) {

    if (!category) {
      throw boom.notFound('category Not Found');
    }
    return { id };
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
