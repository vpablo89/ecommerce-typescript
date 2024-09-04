import  {   NextFunction, Request, Response } from "express"

import { ProductsDTO } from "@/domain/dto/ProductsDTO"
import ProductManager from "../../domain/manager/ProductManager"
import { Product } from "@/domain/entities/Product"


export const list =  async(req: Request, res: Response, next: NextFunction): Promise<void>=>{
    try 
    {
     const { limit, page } = req.query        
     
     const manager: ProductManager = new ProductManager()
     const documents: ProductsDTO = await manager.paginate({limit: Number(limit), page: Number(page)})
     if(!documents){
        
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
     const product: Product = req.body
    
     const manager = new ProductManager()
     await manager.create(product)
     
     res.status(201).send({message: 'Product created successfully'})     
     
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
     const manager = new ProductManager()

     await manager.getOne(id)    
     
     await manager.update(id, body)
     
     res.send({message: 'Product updated successfully'}).status(200).json()
    }
    catch (error)
    {
     next(error)
    }
}
