// las librerias que se encarga de gestionar las conexiones de los servicios a terceros sean api o db

const { Pool } = require('pg');

  const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'admin',
    password: 'admin123',
    database: 'my_store'
  });

module.exports = pool;
