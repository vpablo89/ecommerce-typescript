import { IProduct } from "../model/IProduct";


export interface IProductRepository{
    
    paginate(criteria: string): Array<IProduct>

    getOne(id: number): IProduct

    create(product: IProduct): void

    update(id: number, body: IProduct)



}