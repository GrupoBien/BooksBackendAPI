import clienteSchema from "../models/cliente-models.js"


const createClient = (req, res) => {

    const {body} = req;

    try{
        
        const cliente = await clienteSchema.create(body);
        res.status(201).json({
             msg:"Cliente creado",
             data: cliente,
        })
    } catch (error){
        return res.status(500).json({
            msg: "Error al crear usuario"
        })

    }
}

export default createClient;