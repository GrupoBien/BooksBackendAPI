import Joi from 'joi';

const deleteSchema = Joi.object({
    id: Joi.string().hex().length(24)
});

export default deleteSchema;