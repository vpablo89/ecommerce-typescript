import container from "../../container";
import { IProduct } from "../../data/model/IProduct";
import { IProductRepository } from "../../data/repository/IProductRepository";
import { IProductsDTO } from "../../types";
import { ProductsDTO } from "../dto/ProductsDTO";
import { Product } from "../entities/Product";
import createProductValidation from "../validations/product/ProductCreate";



class ProductManager
{
    private repository: IProductRepository

    constructor(  )
    {
        this.repository = container.resolve('ProductRepository')
    }

    async paginate(criteria: any): Promise<IProductsDTO>
    {
        
        
        const products : ProductsDTO=  await this.repository.paginate(criteria) 
          
               
        return products
    }

    async create(product: IProduct): Promise<void>
    {     
      await createProductValidation.parseAsync(product) 
        
      await this.repository.create(product);            
         
    }

    async getOne(id: string): Promise<Product>
    {
        const product: Product = await this.repository.getOne(id)
        if(!product)
        {
            throw new Error('Product not found')
        }
        return product
    }

    async deleteById(id: string): Promise<void>
    {
        const product = await this.repository.getOne(id)

        if(!product)
        {
            throw new Error('Product not found')
        }
        
        
        await this.repository.deleteById(id)

    }

    
}

export default ProductManager