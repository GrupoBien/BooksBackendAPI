import express from 'express'
import * as createBookController from '../controllers/booksCreateController.js'

const routerCreateBook = express.Router()

routerCreateBook.post('/books', createBookController.createBook)


export default router