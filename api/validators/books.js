import Joi from "joi";

export const updateBooks = Joi.object({
    autor: Joi.string(),
    titulo: Joi.string(),
    genero: Joi.string(),
    editorial: Joi.string(),
    fecha_de_impresion: Joi.date(),
    numero_de_paginas: Joi.number(),
    isbn: Joi.string(),
    idiomas: Joi.string(),
    tipo: Joi.string(),
    portada: Joi.string(),
});
