import { Request, Response } from "express"


export const list = (_req: Request, res: Response): void=>{
    try 
    {
     res.send('4Products').status(200)    
    }
     catch (error)
    {
     res.send('Products not found').status(400)       
    }
}

