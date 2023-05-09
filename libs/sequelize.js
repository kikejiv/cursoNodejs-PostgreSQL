//orm (object relaship model) es una capa para conectarnos a la bd y empezar a manipular las conexiones y manejo de datos
const { Sequelize } = require('sequelize');

const { config } = require('./../config/config'); //importo el modulo de config
const setupModels = require('./../db/models');


const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`; //se concatenn las variables de conexion


const sequelize = new Sequelize(URI, {
  dialect: 'postgres', //se define a la bd que se va a conectar mysqul o postgres
  logging: console.log,
});

setupModels(sequelize);

sequelize.sync();

module.exports = sequelize;
