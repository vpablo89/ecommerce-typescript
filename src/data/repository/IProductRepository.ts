// import { Product } from "../../domain/entities/Product";

import { IProduct } from "../model/IProduct"




export interface IProductRepository{
    
    
    
    getAll(): any

    // getOne(id: number): void

    create(product: IProduct): void

    // update(id: number, body: IProduct): void

    // delete(id: number):void



}