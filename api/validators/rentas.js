import Joi from "joi";

export const rentar = Joi.object({
    quantity: Joi.string().required(),
    startRentDate:Joi.date,
    endRentDate:Joi.date.required(),
    books:Joi.array().items(Number).required(),
    cliente:Joi.Number.required()
});
