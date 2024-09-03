interface IUser {
    id: string ;
    firstName: string;
    lastName: string;
    email: string;
    age: number;
    password: string;
    isAdmin: boolean;
    role: string;
    
  }
  
  class User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    age: number;
    isAdmin: boolean;
    role: string;    
  
    constructor({ id, firstName, lastName, email, password, age, isAdmin, role, avatarUrl }: IUser) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.password = password;
      this.age = age;
      this.isAdmin = isAdmin;
      this.role = role;      
    }
  }
  export default User;