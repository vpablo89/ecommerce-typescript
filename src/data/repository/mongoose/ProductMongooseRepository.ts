import { IProductRepository } from "../IProductRepository";
import ProductSchema from "../../model/mongoose/ProductSchema";
import { Product } from "../../../domain/entities/Product";
import { IProduct } from "../../model/IProduct";

// import { Product } from "../../../domain/entities/Product";


class ProductMongooseRepository implements IProductRepository
{   
    private Schema

    constructor()
    {
        this.Schema = ProductSchema
    }    
    async getAll(): Promise<Product[]> {
            
        return  await this.Schema.find()
        
        
    }
    
    async create(product: IProduct): Promise<void> 
    {      
     await this.Schema.create(product)
    }
    
}  


export default ProductMongooseRepository