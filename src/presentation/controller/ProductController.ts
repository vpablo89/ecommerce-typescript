import  {   NextFunction, Request, Response } from "express"
import ProductManager from "../../domain/manager/ProductManager"
import { IProduct } from "../../data/model/IProduct"


export const list =  async(req: Request, res: Response): Promise<void>=>{
    try 
    {
     const { limit, page } = req.query        
     
     const manager: ProductManager = new ProductManager()
     const products = await manager.paginate({limit, page})
                 
     res.send({status: 'success', products: products.docs, ...products, docs: undefined}).status(200).json()  
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
