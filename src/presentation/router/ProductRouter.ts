import { Router } from "express"; 
import { create, deleteById, getOne, list } from "../controller/ProductController";



const productRouter: Router = Router()

productRouter.get('/', list)

productRouter.post('/', create)

productRouter.get('/:id', getOne)

productRouter.delete('/:id', deleteById)


export default productRouter



