import { IUser } from "@/types";
  
  export class User implements IUser {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    age: number;
    isAdmin: boolean;
    role: string;    
  
    constructor(
      user: IUser) {
      {
        this.id = user.id;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.email = user.email;
        this.password = user.password;
        this.age = user.age;
        this.isAdmin = user.isAdmin;
        this.role = user.role;      
      }  
    }
  }
