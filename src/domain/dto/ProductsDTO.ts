import { IProductsDTO } from "@/types";
import { Product } from "../entities/Product";


export class ProductsDTO implements IProductsDTO{
    products: Product[];
    pagination: Object;

    constructor(products: Product[], pagination: Object)
    {
        this.products = products
        this.pagination = pagination
    }
    
}