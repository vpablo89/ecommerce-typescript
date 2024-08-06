import  { NextFunction, Request, Response } from "express";

const ErrorHandler = (error: Error, _req: Request, res: Response, _next: NextFunction) =>
    {
     if(error.message.includes('duplicate key error collection'))
     {
      res.status(404).send({message: 'Duplicate code'}).json()        

     }else if(error.message.includes('\"Required\"\n  }\n]'))
        {
         res.status(404).send({message: 'Invalid data'}).json()
        }  
     
     
     else{
        res.status(500).send({message: error.message}).json()
     }  
    }

    

export default ErrorHandler