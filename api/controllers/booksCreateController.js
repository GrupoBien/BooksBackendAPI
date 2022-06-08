import Books from '../models/book.js'

const createBook = async(req, res) =>{
    const {book} = req.body
    
    if(!book){
        return res.status(400).json({
            msg: "Falta informacion en el body, favor de completar toda la información"
        })
    }

    try {
        const newBook = await Books.create(book)
        return res.json({
            msg: 'Libro creado correctamente',
            book: newBook
        })
    } catch (error) {
        const result = {
            msg: 'Ha ocurrido un error al guardar el libro',
            error: process.env.NODE_ENV == 'local' || process.env.NODE_ENV == 'development' ? error : null
        }
        return res.status(500).json(result)
    }
}

export {createBook}