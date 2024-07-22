import { IProduct } from "../../data/model/IProduct";
import { IProductRepository } from "../../data/repository/IProductRepository";
import ProductMongooseRepository from "../../data/repository/mongoose/ProductMongooseRepository";
import { criteria } from "../../types";


class ProductManager
{
    private repository: IProductRepository

    constructor(  )
    {
        this.repository = new ProductMongooseRepository()
    }

    async paginate(criteria: criteria): Promise<Object>
    {
        
        
        const products =  await this.repository.paginate(criteria)        
        
        return products
    }

    async create(product: IProduct): Promise<void>
    {     
     this.repository.create(product)     
    }



}

export default ProductManager