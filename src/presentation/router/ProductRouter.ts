import { Router } from "express"; 
import { list } from "../controller/ProductController";



const productRouter: Router = Router()

productRouter.get('/', list)


export default productRouter



