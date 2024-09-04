import container from "@/container";
import { IUserRepository } from "@/data/repository/user/IUserRepository";
import { Criteria } from "@/types";
import { UsersDTO } from "../dto/UsersDTO";
import User from "../entities/User";




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

  async create(user: User): Promise<void> {

    await  this.userRepository.create(user);
  }

  async getOne(id: string): Promise<User> {
   
    const user: User = await this.userRepository.getOne(id);
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  }

}

export default UserManager;