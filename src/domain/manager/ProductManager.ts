import container from "../../container";
import { IProduct } from "@/data/model/product/mongoose/ProductSchema";
import { IProductRepository } from "../../data/repository/product/IProductRepository";
import { IProductsDTO, IProductUpdate } from "../../types";
import { ProductsDTO } from "@/domain/dto/ProductsDTO";
import { Product } from "@/domain/entities/Product";
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

    async update(id: string, body: IProductUpdate): Promise<void>{
        await this.repository.update(id, body)
    }

    
}

export default ProductManager