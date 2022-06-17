import { rentalSchema } from '../models/index.js';
import {clienteSchema} from '../models/index.js'
import {bookSchema} from '../models/index.js'

const createRenta=async(req,res)=>{
  try {
    const {quantity,endRentDate,books,cliente}=req.body
    if(quantity>5)return res.status(400).json({msg:"No se puede rentar mas de 5 libros a la vez"})
    const UserExist=await clienteSchema.findById(cliente)
    if(UserExist==null)return res.status(404).json({msg:"Usuario no encontrado"})
    let BooksExist=[],BooksNotExist=[];
    for(let i=0;i<books.length;i++)
    {
      const exist=await bookSchema.findById(books[i])
      if(exist!==null)BooksExist.push(exist)
      else BooksNotExist.push(books[i])
    }
    console.log(BooksNotExist,BooksExist)
    if(BooksNotExist.length>0)return res.status(404).json({msg:"Algunos libros no existen favor de verificalo"})
    let currentRents=await rentalSchema.find({endRentDate:{$gte:new Date()}});
    if(currentRents.length>=2)return res.status(400).json({msg:"No puede tener mas de dos rentas activas"})
    const insertRent={quantity,endRentDate,books:BooksExist,cliente}
    const renta=await rentalSchema.create(insertRent)
    return res.status(201).json(renta)
  } catch (error) {
    return res.status(400).json({msg:"Verifique su informacion"}) 
  }
}

const getAllRentals = async (req, res) => {
  try {
    const rentals = await rentalSchema.find();
    return res.status(200).json({
      message: 'Ok',
      rentals,
    });
  } catch (error) {
    return res.status(400).json({
      message: 'Error al obtener todas las rentas',
    });
  }
};

export { getAllRentals,createRenta };
