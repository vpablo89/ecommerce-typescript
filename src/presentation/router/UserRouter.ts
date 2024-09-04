import { Router } from "express";
import { create, deleteById, list, update } from "../controller/UserController";
import { getOne } from "../controller/UserController";


const userRouter: Router = Router()


userRouter.get('/', list)
userRouter.get('/:id', getOne)
userRouter.post('/', create)
userRouter.put('/:id', update)
userRouter.delete('/:id', deleteById)

export default userRouter