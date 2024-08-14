import { IProductRepository } from "../IProductRepository";
import ProductSchema  from "../../model/mongoose/ProductSchema";
import { IProduct } from "../../model/IProduct";
import { Product } from "../../../domain/entities/Product";
import { IProductsDTO, IProductUpdate, ProductWith_Id } from "../../../types";
import { ProductsDTO } from "../../../domain/dto/ProductsDTO";


class ProductMongooseRepository implements IProductRepository
{   
    private Schema

    constructor()
    {
        this.Schema = ProductSchema
    }    
    
    
    async paginate(criteria: any): Promise<IProductsDTO> {
        
        
        const { limit , page } = criteria
        const productDocuments =  await this.Schema.paginate<ProductWith_Id>({}, {limit, page})
        
        const { docs, ...pagination} = productDocuments
        
        const products: Product[]  = docs.map((product: any) => new Product({
            id: product._id,
            title: product.title,
            description: product.description,
            code: product.code,
            price: product.price,
            status: product.status,
            stock: product.stock,
            category: product.category,
            thumbnail: product.thumbnail
        }))
        
        return new ProductsDTO(products, pagination)
        
    }
    
    async create(product: IProduct): Promise<void> 
    {      
        await this.Schema.create(product)
    }
    
    async getOne(id: string): Promise<Product> {
        const product : any = await this.Schema.findById(id)       

        return new Product({
            id: product._id,
            title: product.title,
            description: product.description,
            code: product.code,
            price: product.price,
            status: product.status,
            stock: product.stock,
            category: product.category,
            thumbnail: product.thumbnail
        })

    }
    async deleteById(id: string): Promise<void> {
        
        await this.Schema.deleteOne({_id: id}) 
    }

    async update(id: string, body: IProductUpdate): Promise<void> {
        await this.Schema.findByIdAndUpdate({_id: id}, body)
    }
}  


export default ProductMongooseRepository