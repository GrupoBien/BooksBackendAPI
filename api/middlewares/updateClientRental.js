import Renta from '../models/Renta.js';

const updateClientRental = async(req, res, next) =>{ 
    /*Si el cliente no tiene rentas */
    const rentas = await Renta.find({ 
        endRentDate: { 
            $gte: new Date()
        },
        cliente: req.params.id
    });
    if ( rentas.length === 0 ) {
      next()
    }
     /*Si el cliente tiene rentas */
    else {
        res.status(400).json(
            {
                msg: "No se puede actualizar tu perfil cuando tienes libros rentados"
            }
        )
    }
}

export default updateClientRental;