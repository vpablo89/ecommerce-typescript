import { IProductRepository } from "@/data/repository/product/IProductRepository";
import ProductSchema  from "../../../model/product/mongoose/ProductSchema";
import { Product } from "../../../../domain/entities/Product";
import { Criteria, IProductDocument, IProductsDTO} from "@/types";
import { ProductsDTO } from "../../../../domain/dto/ProductsDTO";


class ProductMongooseRepository implements IProductRepository
{   
    private productSchema

    constructor()
    {
        this.productSchema = ProductSchema
    }    
    
    
    async paginate(criteria: Criteria): Promise<IProductsDTO> {
        
        
        const { limit , page } = criteria
        const productDocuments =  await this.productSchema.paginate<IProductDocument>({}, {limit, page})
        
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
    
    async create(product: Product): Promise<void> 
    {      
        await this.productSchema.create(product)
    }
    
    async getOne(id: string): Promise<Product> {
        const product : any = await this.productSchema.findById(id)       

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
        
        await this.productSchema.deleteOne({_id: id}) 
    }

    async update(id: string, body: Product): Promise<void> {
        await this.productSchema.findByIdAndUpdate({_id: id}, body)
    }
}  


export default ProductMongooseRepository