import {rentar} from '../validators/index.js';

const validateCreateRental = async(req, res, next) =>{
    const {body} = req;
    try {
        await rentar.validateAsync(body);
        next();
    } catch (error) {
        return res.status(400).json({
            msg: 'Error al intentar crear una renta, verificar campos',
            error
        })
    }
}

export default validateCreateRental;