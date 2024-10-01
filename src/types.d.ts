import { Document } from "mongoose";
import { Product } from "./domain/entities/Product";
import e from "express";
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
  public class Tumama implements IProductDocument{

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

export  type UserDTO  = Omit<IUser, 'password'>; 
export interface IUserDocument extends IUser, Document{ 
    
}
export interface IRole{
    id: string
    name: string
    permissions: string[]
}

export interface IRoleDocument extends IRole, Document{
}





  

