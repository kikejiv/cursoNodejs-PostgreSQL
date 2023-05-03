// las librerias se encanran de la conexion a terceros sean api o db

const { Client } = require('pg');

async function getConnection() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'admin',
    password: 'admin123',
    database: 'my_store'
  });
  await client.connect();
  return client;
}

module.exports = getConnection;
