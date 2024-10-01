import { NextFunction, Request, Response } from "express"

import { UsersDTO } from "@/domain/dto/UsersDTO"
import UserManager from "../../domain/manager/UserManager"
import  User from "../../domain/entities/User"


export const list = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { limit, page } = req.query

        const manager: UserManager = new UserManager()
        const documents: UsersDTO = await manager.paginate({ limit: Number(limit), page: Number(page) })

        if (!documents) {
            throw new Error('Users not found, Bad Request')
        }
        const { users, pagination } = documents
        if (users.length === 0) {
            throw new Error()
        }

        res.send({ status: 'success', users, ...pagination })
    }
    catch (error) {
        next(error)
    }
}
export const create = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const user: User = req.body

        const manager = new UserManager()
        await manager.create(user)

        res.status(201).send({ message: 'User created successfully' })

    }
    catch (error) {
        next(error)
    }
}
export const getOne = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { id } = req.params
        const manager = new UserManager()
        const user = await manager.getOne(id)
        if (!user) {
            throw new Error('User not found')
        }

        res.send({ status: 'success', user })
    }
    catch (error) {
        next(error)
    }
}

export const deleteById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { id } = req.params
        const manager = new UserManager()

        await manager.deleteById(id)

        res.status(204)
    }
    catch (error) {
        next(error)
    }
}

export const update = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { id } = req.params
        const body = req.body
        const manager = new UserManager()        

        await manager.update(id, body)

        res.send({ message: 'Product updated successfully' })
    }
    catch (error) {
        next(error)
    }
}