import { IProduct } from "../../model/IProduct";
import { IProductRepository } from "../IProductRepository";
import ProductSchema from "../../model/mongoose/ProductSchema";


class ProductMongooseRepository implements IProductRepository
{   
    private Schema

    constructor()
    {
        this.Schema = ProductSchema
    }

    async paginate(): Promise<null>
    {          
     const products = await this.Schema.find() 
     console.log('productsRepository')
     console.log(products)

     return null
    }
    async getOne(id: number): Promise<void>  {
        throw new Error("Method not implemented."+ id);
    }
    async create(product: IProduct): Promise<void> {
        this.Schema.create(product)
    }
    async update(id: number, body: IProduct): Promise<void> {
        throw new Error("Method not implemented."+ id + body);
    }
    async delete(id: number): Promise<void> {
        throw new Error("Method not implemented."+ id);
    }
    
    
}

export default ProductMongooseRepository