import container from "../../container";
import { IUserRepository } from "@/data/repository/user/IUserRepository";
import { Criteria } from "@/types";
import { UsersDTO } from "../dto/UsersDTO";
import { User } from "../entities/User";
import userCreateValidation from "../validations/user/UserCreate";
import { createHash } from "../../shared";





class UserManager {
  private userRepository: IUserRepository;

  constructor() {
    this.userRepository = container.resolve("UserRepository");
  }

  async paginate(criteria: Criteria): Promise<UsersDTO>
  {
    const users: UsersDTO = await this.userRepository.paginate(criteria);
    return users;
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
    return user;
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

}

export default UserManager;