import { IProduct } from "../../data/model/IProduct";
import { IProductRepository } from "../../data/repository/IProductRepository";
import ProductMongooseRepository from "../../data/repository/mongoose/ProductMongooseRepository";



class ProductManager
{
    private repository: IProductRepository

    constructor(  )
    {
        this.repository = new ProductMongooseRepository()
    }

    async getAll(): Promise<Object>
    {
        
        
        const products =  await this.repository.getAll() 
               
        return products
    }

    async create(product: IProduct): Promise<void>
    {     
     this.repository.create(product)     
    }

    
}

export default ProductManager