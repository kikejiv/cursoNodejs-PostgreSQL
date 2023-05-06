const boom = require('@hapi/boom');

//const getConnection = require('../libs/postgres');
const pool = require('../libs/postgres.pool');

const { models } = require('./../libs/sequelize')

class UserService {
  constructor() {
  /*  this.pool = pool;
    this.pool.on('error', (err) => console.error(err));*/
  }

  async create(data) {
    const newUser = await models.User.create(data);
    return newUser;
  }

  async find() {
   // const client = await getConnection();
    const rta = await models.User.findAll();
   // const rta = await client.query('SELECT * FROM tasks')
   // return rta.rows;
   return rta;
  }

  async findOne(id) { //esta funcion busca el id, valida y lanza el error por si el id no existe
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound('User Not Found');
    }
    return user;
  }

  async update(id, changes) {
    const user = await this.findOne(id); //esta es la funcion para la vaidacion del error
    const rta = await user.update(changes);
    return rta;
  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return { id };
  }
}

module.exports = UserService;
