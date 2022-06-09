import Joi from 'joi';

const postSchema = Joi.object({
    nombre: Joi.string().required(),
    fecha_de_nacimiento: Joi.date().required(),
    mail: Joi.string().required(),
    nombre_app: Joi.string().required(),
});

export default postSchema;