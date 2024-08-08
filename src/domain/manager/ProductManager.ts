import { IProduct } from "../../data/model/IProduct";
import { IProductRepository } from "../../data/repository/IProductRepository";
import ProductMongooseRepository from "../../data/repository/mongoose/ProductMongooseRepository";
import { IProductsDTO } from "../../types";
import { ProductsDTO } from "../dto/ProductsDTO";
import createProductValidation from "../validations/product/ProductCreate";



class ProductManager
{
    private repository: IProductRepository

    constructor(  )
    {
        this.repository = new ProductMongooseRepository()
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

    
}

export default ProductManager