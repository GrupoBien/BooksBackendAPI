import Joi from 'joi';

const updateSchema = Joi.object({
    nombre: Joi.string(),
    nombre_app: Joi.string(),
});

export default updateSchema;