import { Router } from "express"; 
import { create, deleteById, getOne, list, update } from "../controller/ProductController";
import auth from "../middlewares/auth";



const productRouter: Router = Router()

productRouter.get('/', list)

productRouter.post('/', create)

productRouter.get('/:id', auth, getOne)

productRouter.delete('/:id', deleteById)

productRouter.put('/:id', update)


export default productRouter



