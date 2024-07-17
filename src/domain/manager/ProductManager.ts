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

    async paginate()
    {
        const products =  await this.repository.paginate()        
        
        return products
    }

    async create(product: IProduct)
    {
     this.repository.create(product)   
    }



}

export default ProductManager