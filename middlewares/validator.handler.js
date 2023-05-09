const boom = require('@hapi/boom');
const { ValidationError } = require('sequelize'); //validar el error cuando un dato unico esta repetido

function validatorHandler(schema, property) {
  return (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      next(boom.badRequest(error));
    }
    next();
  }
}

module.exports = validatorHandler;
