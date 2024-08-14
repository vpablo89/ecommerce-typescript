// import { Product } from "../../domain/entities/Product";

import { Product } from "../../domain/entities/Product"
import { IProductUpdate } from "../../types"
import { IProduct } from "../model/IProduct"




export interface IProductRepository{
    
    
    
    paginate(criteria: any): Promise<any>

    create(product: IProduct): void
    
    getOne(id: string): Promise<Product>

    deleteById(_id: string):Promise<void>

    update(id:string,  body: IProductUpdate): void




}