import { Router } from "express"; 
import { create, list } from "../controller/ProductController";



const productRouter: Router = Router()

productRouter.get('/', list)
productRouter.post('/', create)



export default productRouter



