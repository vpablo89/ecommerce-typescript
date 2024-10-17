import { Document } from "mongoose";
import { Product } from "./domain/entities/Product";
import e from "express";
import { RoleNames } from "./enums";
export interface Criteria{
    limit: number
    page: number
}


export interface IProduct { 
    id: string;       
    title: string;
    description: string;
    code: string;
    price: number;
    status: boolean;
    stock: number;
    category: string;
    thumbnail: string;
}
export interface IProductDocument extends IProduct, Document {
    
}  

export interface ListOfProducts {
    products: Array<IProduct>
}

export interface IProductsDTO{
    products: Array<Product>
    pagination: Object
}

export interface IUsersDTO{
    users: Array<User>
    pagination: Object
}

export interface Criteria{
    limit: number
    page: number
}



export interface IUser {
    id: string 
    firstName: string
    lastName: string
    email: string
    age: number
    password: string
    isAdmin: boolean
    role: IRole    
  }
export type IUserOutput = Omit<IUser, 'password'>;  

export  type UserDTO  = Omit<IUser, 'password'>; 
export interface IUserDocument extends IUser, Document{ 
    
}
export interface IRole{
    id: string
    name: RoleNames
    permissions: string[]
}

export interface IRoleDocument extends IRole, Document{
}





  

