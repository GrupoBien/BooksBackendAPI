import {model,Schema} from 'mongoose'

const rentaSchema= new Schema({
    quantity:Number,
    startRentDate:{type: Date,default:Date.now},
    endRentDate:Date,
    books:[{type:Schema.Types.ObjectId,ref:"Libro"}],
    cliente:{type:Schema.type.ObjectId,ref:"Cliente"}
})
export default model("Renta",rentaSchema)
