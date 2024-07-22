import { IProduct } from "../../model/IProduct";
import { IProductRepository } from "../IProductRepository";
import ProductSchema from "../../model/mongoose/ProductSchema";
import { criteria } from "../../../types";
import { Product } from "../../../domain/entities/Product";


class ProductMongooseRepository implements IProductRepository
{   
    private Schema

    constructor()
    {
        this.Schema = ProductSchema
    }    
    async paginate(criteria: criteria)
    {          
         
     const { limit, page }  = criteria
     const productsDocuments  = await this.Schema.paginate({}, criteria)
     console.log(limit, page)
     console.log(productsDocuments) 
     console.log('productsDocuments') 
     
     const {  docs, ...pagination } = productsDocuments
     console.log(pagination)
     console.log('pagination')
     console.log(typeof docs)

    // const products = docs.map(document=> new Product({
    //     id: document._id,
    //     title: document.title,
    //     description: document.description,
    //     code: document.code,
    //     price: document.price,
    //     status: document.status,
    //     stock: document.stock,
    //     category: document.category  
    // }))  
    
    return{
        productsDocuments
    }



    }
    
    async create(product: IProduct): Promise<void> 
    {   
     await this.Schema.create(product)
    }
    
}  


export default ProductMongooseRepository