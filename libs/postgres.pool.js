// pool es la librerias que se encarga de gestionar las conexiones de los servicios a terceros sean api o db

const { Pool } = require('pg');

const { config } = require('./../config/config') //importo el modulo de config

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`; //se concatenn las variables de conexion

const pool = new Pool({ connectionString: URI });

module.exports = pool;
