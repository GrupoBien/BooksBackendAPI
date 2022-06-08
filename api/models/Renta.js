import {model,Schema} from 'mongoose'

const rentaSchema= new Schema({
    cuantity:Number,
    StartRentDate:{
        type: Date,
        default:Date.now
    },
    EndRentDate:Date,
    idBook:{
        type:Schema.Types.ObjectId,
        ref:"Libro"
    },
    idCliente:{
        type:Schema.type.ObjectId,
        ref:"Cliente"
    }
})
export default model("Renta",rentaSchema)
