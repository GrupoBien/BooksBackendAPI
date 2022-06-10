import createHttpError from 'http-errors'
import Validators from '../validators/index.js'

export default (validator, property) =>  {

    if(!Validators.hasOwnProperty(validator)) {
        throw new Error(`'${validator}' validator does not exist`)
    }
    
    return async (req, res, next) => {
        try {
            const validatedBody = await Validators[validator].validateAsync(req[property]);
            console.log(validatedBody);
            req.body = validatedBody
        } catch (error) {
            if(error.isJoi) return next(createHttpError(422, {message: error.message}))
            next(createHttpError(500))
        }
        next()
    }
}

