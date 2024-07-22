import { Product } from "../../domain/entities/Product";
import { criteria } from "../../types";
import { IProduct } from "../model/IProduct";


export interface IProductRepository{
    
    
    
    paginate(criteria: criteria): any

    // getOne(id: number): void

    create(product: IProduct): void

    // update(id: number, body: IProduct): void

    // delete(id: number):void



}