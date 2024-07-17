import  { Request, Response } from "express"
import ProductManager from "../../domain/manager/ProductManager"


export const list =  async(_req: Request, res: Response): Promise<void>=>{
    try 
    {
     const manager = new ProductManager()
     const products = await manager.paginate()
     if(!products)
     {
        throw new Error('Products not found')
     }
            
     res.send({products: products, message: 'hola'}).status(200)    
    }
     catch (error)
    {
     res.send().status(400)       
    }
}

export const create = async (req: Request, res: Response): Promise<void>=>
{
    try
    {
     const manager = new ProductManager()
     await manager.create(req.body)

     res.send('Product created').status(200)     
     
    }
    catch (error)
    {
     res.send('No se pudo crear el producto')   
    }
}

