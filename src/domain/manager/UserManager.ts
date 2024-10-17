import container from "../../container";
import { IUserRepository } from "@/data/repository/user/IUserRepository";
import { Criteria } from "@/types";
import { UsersDTO } from "../dto/UsersDTO";
import  User  from "../entities/User";
import userCreateValidation from "../validations/user/UserCreate";
import { createHash } from "../../shared";
import { RoleNames } from "@/enums";





class UserManager {
  private userRepository: IUserRepository;

  constructor() {
    this.userRepository = container.resolve("UserRepository");
  }

  async paginate(criteria: Criteria): Promise<UsersDTO>
  {
    const documents: UsersDTO = await this.userRepository.paginate(criteria);
    const {users, pagination } = documents;

    return {users: users.map(user => ({...user, password: undefined})), pagination};    
  }

  async create(data: User): Promise<User> {

    await userCreateValidation.parseAsync(data);

    const dto : User= {
      ...data,
      password: await createHash(data.password),
    };
    
    const user = await this.userRepository.create(dto);
    
    return {...user, password: ''};

    }   
  

  async getOne(id: string): Promise<User> {
   
    const user: User = await this.userRepository.getOne(id);
    if (!user) {
      throw new Error("User not found");
    }
    return {...user, password:''};
  }

  async deleteById(id: string): Promise<void> {
    const user = await this.userRepository.getOne(id);
    if (!user) {
      throw new Error("User not found");
    }
    await this.userRepository.deleteById(id);
  }

  async update(id: string, body: User): Promise<void> {
    
    await this.userRepository.update(id, body);
  }

  async setRole(id: string, roleName: RoleNames): Promise<void> {
    await this.userRepository.setRole(id, roleName);
  }

}

export default UserManager;