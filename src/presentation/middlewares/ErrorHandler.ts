import  { NextFunction, Request, Response } from "express";

const ErrorHandler = (error: Error, _req: Request, res: Response, _next: NextFunction) =>
    {
     if(error.message.includes('duplicate key error collection'))
     {
      res.status(500).send({message: 'Duplicate code'}).json()        
     }
      else if(error.message.includes('\"Required\"\n  }\n]'))
     {
      res.status(400).send({message: 'Invalid input data'}).json()
     } 
      else if(error.message.includes('Cast to ObjectId failed for value')) 
     {
        res.status(404).send({message: 'No product found'}).json
     }     
      else if(error.message.includes('Cannot set headers after they are sent to the client')) 
     {
        res.status(400).send({message: 'Bad Request'}).json
        
     }     
      else if(error.message.includes("Cannot read properties of null (reading '_id')")) 
     {
        res.status(400).send({message: 'No product found'}).json
     }    
     else
     {
        res.status(500).send({message: error.message}).json()
     }  
    }

    

export default ErrorHandler