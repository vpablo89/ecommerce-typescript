import RoleManager from "../../domain/manager/RoleManager"
import { NextFunction, Request, Response } from "express"



export const list = async (_req: Request, res: Response, next: NextFunction): Promise<void> =>
{
    try
    {
        const manager = new RoleManager()
        const roles = await manager.list()
        if(Object.keys(roles).length === 0)
        {
            throw new Error('No Roles not found')
        }

        res.status(200).send({roles, status:'success'})
    }
    catch (error)
    {
        next(error)
    }
}

export const create = async (req: Request, res: Response, next: NextFunction): Promise<void> =>
{
    try
    {
        const role = req.body

        const manager = new RoleManager()
        await manager.create(role)

        res.status(201).send({ message: 'Role created successfully' })

    }
    catch (error)
    {
        next(error)
    }
}

export const getOne = async (req: Request, res: Response, next: NextFunction): Promise<void> =>
{
    try
    {
        const { id } = req.params
        const manager = new RoleManager()
        const role = await manager.getOne(id)
        if(!role)
        {
            throw new Error('Role not found')
        }

        res.send({ status: 'success', role })
    }
    catch (error)
    {
        next(error)
    }
}

export const deleteById = async (req: Request, res: Response, next: NextFunction): Promise<void> =>
{
    try
    {
        const { id } = req.params
        const manager = new RoleManager()

        await manager.deleteById(id)

        res.status(204)
    }
    catch (error)
    {
        next(error)
    }
}

export const update = async (req: Request, res: Response, next: NextFunction): Promise<void> =>
{
    try
    {
        const { id } = req.params
        const body = req.body
        const manager = new RoleManager()        

        await manager.update(id, body)

        res.status(200).send({message: 'Role updated successfully'})
    }
    catch (error)
    {
        next(error)
    }
}

