import { Router } from "express";
import auth from "../middlewares/Auth";
import { create, deleteById, getOne, list, update } from "../controller/RoleController";



const roleRouter = Router();

roleRouter.get('/', list)

roleRouter.post('/', auth, create)

roleRouter.get('/:id', getOne)

roleRouter.delete('/:id', auth, deleteById)

roleRouter.put('/:id', auth, update)

export default roleRouter