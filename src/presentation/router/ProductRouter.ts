import { Router } from "express"; 
import { create, deleteById, getOne, list, update } from "../controller/ProductController";
import auth from "../middlewares/Auth";



const productRouter: Router = Router()

productRouter.get('/',  list)

productRouter.post('/', auth, create)

productRouter.get('/:id',  getOne)

productRouter.delete('/:id', auth,  deleteById)

productRouter.put('/:id',  auth, update)


export default productRouter



