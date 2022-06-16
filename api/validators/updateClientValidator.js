import Joi from "joi";

export const updateClient = Joi.object({
    name: Joi.string().required(),
    date_birth: Joi.date().required(),
    address: Joi.string().required(),
    references:Joi.array().items(Joi.object(
        {
            name: Joi.string().required(),
            phone: Joi.number().required(),
        })),
    email: Joi.string().required(),
    phone: Joi.number().required(),
});
