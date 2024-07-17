import { IProduct } from "../model/IProduct";


export interface IProductRepository{
    
    
    
    paginate(): Promise<null>

    getOne(id: number): void

    create(product: IProduct): void

    update(id: number, body: IProduct): void

    delete(id: number):void



}