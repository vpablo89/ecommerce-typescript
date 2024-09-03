import { IProductsDTO, ProductWithId } from "@/types";


export class ProductsDTO implements IProductsDTO{
    products: ProductWithId[];
    pagination: Object;

    constructor(products: ProductWithId[], pagination: Object)
    {
        this.products = products
        this.pagination = pagination
    }
    
}