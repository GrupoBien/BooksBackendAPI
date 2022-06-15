import mongoose from 'mongoose';
import {updateClient} from '../validators/index.js';
import Renta from '../models/Renta.js';

/*const query = { endRentDate: Date };
Model.findOneAndUpdate(query, { endRentDate: Date }, (Date >= endRentDate)options, return:'Tu perfil de cliente no puede actualizarse mientras tengas un libro en renta';callback)*/

/*Renta.find({ endRentDate: { Date }},  
ValidChange = (endRentDate) => { Date >= endRentDate Por alguna razon no me deja poner >=
   return 'Tu perfil de cliente no puede actualizarse mientras tengas un libro en renta';
}); POR COMIT TUVE QUE QUITAR DATE DE MOONGOSE EN IMPORT LINEA 1*/
const MidClientUpdate = async(req, res, next) =>{
    const {body} = req;
    try {
        await updateClientValidator.validateAsync(body);
        next();
    } catch (error) {
        return res.status(400).json({
            msg: 'Error al intentar actualizar cliente, campos no válidos',
            error
        })
    }
}

export default MidClientUpdate
 