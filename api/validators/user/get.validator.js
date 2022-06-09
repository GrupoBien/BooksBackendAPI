import Joi from 'joi';

const getSchema = Joi.object({
    id: Joi.string().hex().length(24)
});

export default getSchema;