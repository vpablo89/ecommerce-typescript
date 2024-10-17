import { Router } from "express";
import { create, deleteById, list, setRole, update } from "../controller/UserController";
import { getOne } from "../controller/UserController";
import auth from "../middlewares/Auth";


const userRouter: Router = Router()


userRouter.get('/', auth, list)
userRouter.get('/:id', auth, getOne)
userRouter.post('/', auth, create)
userRouter.put('/:id', auth, update)
userRouter.put('/:id', auth, setRole)
userRouter.delete('/:id', auth,  deleteById)

export default userRouter