import { NextFunction, Request, Response } from 'express'
import SessionManager from '../../domain/manager/SessionManager'
import loginValidation from '../../domain/validations/session/LoginValidation'



export const login = async (req: Request, res: Response, next: NextFunction) => {

    try
    {
        const { email, password } = req.body

        await loginValidation.parseAsync({ email, password })

        const sessionManager = new SessionManager()
        const accesToken = await sessionManager.login(email, password)
        res.cookie('token', accesToken, { 
            httpOnly: true,
            secure: true,
            sameSite: 'none',
            maxAge: 1000 * 60 * 60 }).send({message: 'Login success', accesToken: accesToken})

    }
    catch (error)
    {
        next(error)
    }

}

export const current = async (req: Request, res: Response, next: NextFunction) =>
    {
        try
        {
            res.send({status: 'success', payload: req.user})
        }
        catch (error)
        {
            next(error)
        }
    }

export const signup = async (req: Request, res: Response, next: NextFunction) => {
    try
    {
        const manager = new SessionManager()
        const user =  manager.signup(req.body)
       
        res.send({status: 'Success', user, message: 'User Created'})
    }
    catch (error)
    {
        next(error)
    }
}    

