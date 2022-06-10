import Joi from "joi";

export const updateBook = Joi.object({
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

export const createBook = Joi.object({
    autores: Joi.string().required(),
    titulo: Joi.string().required(),
    categoria: Joi.string().empty("").default("Without Category"),
    editorial: Joi.string().required(),
    fechaImpresion: Joi.date().required(),
    paginas: Joi.number().integer().required(),
    isbn: Joi.number().integer(),
    idioma: Joi.string().required(),
    tipo: Joi.string().required(),
    mayoriaEdad: Joi.boolean().required(),
    portada: Joi.string()
        .empty("")
        .default(
            "https://www.giulianisgrupo.com/wp-content/uploads/2018/05/nodisponible.png"
        ),
});
