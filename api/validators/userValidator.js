import Joi from 'joi';

export const validUserSchema = Joi.object({
  user: Joi.object({
    nombre: Joi.string().required(),
    fecha_de_nacimiento: Joi.date().required(),
    mail: Joi.string().required(),
    nombre_app: Joi.string().required(),
    password: Joi.string().required(),
  }).required(),
});
