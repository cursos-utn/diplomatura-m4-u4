const mysql = require('mysql');
const util = require('util');
const conf = require(`./config.${process.env.NODE_ENV}`)

const conexion = mysql.createConnection({
  host: conf.HOST,
  user: conf.USER,
  password: conf.PASSWORD,
  database: conf.DB,
});

conexion.connect();
const query = util.promisify(conexion.query).bind(conexion);


async function personasList() {
  const respuesta = await query('select id, nombre, apellido, edad from persona');
  return respuesta;
}

async function personasGet(id) {
  const respuesta = await query('select id, nombre, apellido, edad from persona where id=?', [id]);
  return respuesta;
}

function personasAdd(persona) {

}

function personasUpdate(persona) {

}

function personasRemove(id) {

}


module.exports = {
    personasList,
    personasGet,
    personasAdd,
    personasUpdate,
    personasRemove,
}
