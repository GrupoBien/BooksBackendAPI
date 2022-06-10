import express from 'express'
import {createBook} from '../controllers/index.js'
import {validateBookeCreation} from '../middlewares/index.js'

const routerCreateBook = express.Router()

routerCreateBook.post('/books', validateBookeCreation, createBook)


export default routerCreateBook