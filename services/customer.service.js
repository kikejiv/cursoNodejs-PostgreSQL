const boom = require('@hapi/boom');

//const getConnection = require('../libs/postgres');
const pool = require('../libs/postgres.pool');

const { models } = require('./../libs/sequelize')

class CustomerService {
  constructor() {
  /*  this.pool = pool;
    this.pool.on('error', (err) => console.error(err));*/
  }
//de esta manera estariamos creando el usuario y el cliente en el mismo endpoint
  async create(data) {//aqui resuelve creaando primero el usuario
    const newCustomer = await models.Customer.create( data, {
      include: ['user']
    });
    return newCustomer;
  }

  async find() {
   // const client = await getConnection();
    const rta = await models.Customer.findAll({
      include: ['user'] //desde aqui le digo que me traiga la informacion del cliente anidada al usuario
    });
   // const rta = await client.query('SELECT * FROM tasks')
   // return rta.rows;
   return rta;
  }

  async findOne(id) { //esta funcion busca el id, valida y lanza el error por si el id no existe
    const customer = await models.Customer.findByPk(id);
    if (!customer) {
      throw boom.notFound('Customer Not Found');
    }
    return customer;
  }

  async update(id, changes) {
    const customer = await this.findOne(id); //esta es la funcion para la vaidacion del error
    const rta = await customer.update(changes);
    return rta;
  }

  async delete(id) {
    const customer = await this.findOne(id);
    await customer.destroy();
    return { id };
  }
}

module.exports = CustomerService;
