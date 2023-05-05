//orm (object relaship model) es una capa para conectarnos a la bd y empezar a manipular las conexiones y manejo de datos
const { Sequelize } = require('sequelize');

const { config } = require('./../config/config') //importo el modulo de config

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`; //se concatenn las variables de conexion


const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: console.log,
});

module.exports = sequelize;
