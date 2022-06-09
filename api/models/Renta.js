import {model,Schema} from 'mongoose'

const rentaSchema= new Schema({
    quantity:Number,
    startRentDate:{type: Date,default:Date.now},
    endRentDate:Date,
    books:[{type:Schema.Types.ObjectId,ref:"Book"}],
    cliente:{type:Schema.type.ObjectId,ref:"cliente"}
})
export default model("Renta",rentaSchema)
