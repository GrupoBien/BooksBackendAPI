import Joi from 'joi';

export const rentar = Joi.object({
  quantity: Joi.number().required(),
  startRentDate: Joi.date,
  endRentDate: Joi.date().required(),
  books: Joi.array().items(String).required(),
  cliente: Joi.string().required(),
});
