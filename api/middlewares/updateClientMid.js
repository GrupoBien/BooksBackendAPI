import {updateClient} from '../validators/index.js';

const MidClientUpdate = async(req, res, next) =>{
    try{
        await updateClient.validateAsync(req.body)
        next()
    }catch(error){
        res.status(400).json(
            {
                msg: "Error al actualizar tu información, revisa los campos"
            }
        )
    } 
}

export default MidClientUpdate
 