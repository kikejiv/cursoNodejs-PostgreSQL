const boom = require('@hapi/boom');
const { ValidationError } = require('sequelize'); //validar el error cuando un dato unico esta repetido

// const queryErrorHandler = (err, req, res, next) => {
//   if(err instanceof ValidationError)
//     boomErrorHandler(boom.badRequest (err.message), req, res, next);
//     next(err);
// }

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
