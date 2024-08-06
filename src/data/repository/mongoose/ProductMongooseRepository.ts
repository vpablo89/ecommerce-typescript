import { IProductRepository } from "../IProductRepository";
import ProductSchema from "../../model/mongoose/ProductSchema";
// import { Product } from "../../../domain/entities/Product";
import { IProduct } from "../../model/IProduct";




class ProductMongooseRepository implements IProductRepository
{   
    private Schema

    constructor()
    {
        this.Schema = ProductSchema
    }    
    async paginate(criteria: any) {
        
        
        const { limit , page } = criteria
        const productDocuments =  await this.Schema.paginate({}, {limit, page})

        return productDocuments
        
    }
    
    async create(product: IProduct): Promise<void> 
    {      
     await this.Schema.create(product)
    }
    
}  


export default ProductMongooseRepository