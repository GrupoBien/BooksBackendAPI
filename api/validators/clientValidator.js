import Joi from "joi";

export const updateClient = Joi.object({
    nombre: Joi.string(),
    date_birth: Joi.date(),
    address: Joi.string(),
    references: Joi.object({
        nombre: Joi.string(),
        telefono: Joi.number(),
    }),
    email: Joi.string(),
    telefono: Joi.number(),
});
