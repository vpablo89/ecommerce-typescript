import  {   NextFunction, Request, Response } from "express"
import ProductManager from "../../domain/manager/ProductManager"
import { IProduct } from "../../data/model/IProduct"


export const list =  async(_req: Request, res: Response): Promise<void>=>{
    try 
    {
             
     const manager: ProductManager = new ProductManager()
     const products = await manager.getAll()
                 
     res.send(products).status(200)  
    }
     catch (error)
    {
     res.status(404).send({message: 'Products not found 123'}).json()       
    }
    
}

export const create = async (req: Request, res: Response, next: NextFunction): Promise<void>=>
{
    try
    {
     const product: IProduct = req.body
    
     const manager = new ProductManager()
     await manager.create(product)
     
     res.send({message: 'Product created successfully'}).status(200)     
     
    }
    catch (error)
    {
     next(error)
    }    
    
}
