
import { Product } from "@/domain/entities/Product"
import { Criteria, IProductsDTO } from "@/types"







export interface IProductRepository{    
    
    paginate(criteria: Criteria): Promise<IProductsDTO>

    create(product: Product): void
    
    getOne(id: string): Promise<Product>

    deleteById(_id: string):Promise<void>

    update(id:string,  body: Product): void

}