import  {   NextFunction, Request, Response } from "express"
import ProductManager from "../../domain/manager/ProductManager"
import { IProduct } from "../../data/model/IProduct"
import { ProductsDTO } from "../../domain/dto/ProductsDTO"


export const list =  async(req: Request, res: Response, next: NextFunction): Promise<void>=>{
    try 
    {
     const { limit, page } = req.query        
     
     const manager: ProductManager = new ProductManager()
     const documents: ProductsDTO = await manager.paginate({limit, page})
     if(!documents){
        console.log('por aca')
        throw new Error('Products not found, Bad Request')
     }
     const { products, pagination} = documents

     if(products.length === 0)
     {
      throw new Error()
    }
     
                 
     res.send({status: 'success', products, ...pagination }).status(200).json()  
    }
     catch (error)
    {
     res.status(404).send({message: 'Products not found'}).json()
     console.log('error resuelto')
     next(error)       
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

export const getOne = async (req: Request, res: Response, next: NextFunction): Promise<void> =>
    {
        try
        {
         const { id } = req.params
         const manager = new ProductManager()
         const product = await manager.getOne(id)
         if(!product)
         {
          throw new Error('Product not found')
         }
         
         res.send({status: 'success', product}).status(200).json()
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
     const manager = new ProductManager()
     
     await manager.deleteById(id)
        
     res.send({message: 'Product deleted successfully'}).status(204).json()
    }
    catch (error)
    {
     next(error)
    }
}
