import { Document } from "mongoose";


export interface IProduct {        
    title: string;
    description: string;
    code: string;
    price: number;
    status: boolean;
    stock: number;
    category: string;
    thumbnail: string;
}

export interface ProductWithId extends IProduct { 
    id: string;     
}

export interface ProductWith_Id extends IProduct {
    _id: string;
    paginate: (any)=> any
}

export type ProductEntry = Omit<Product, 'id'>;
    

export interface ListOfProducts {
    products: Array<Product>
}

export interface IProductsDTO{
    products: Array<ProductWithId>
    pagination: Object
}






  

