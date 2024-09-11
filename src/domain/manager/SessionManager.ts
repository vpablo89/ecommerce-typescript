import container from "../..//container";
import { IUserRepository } from "@/data/repository/user/IUserRepository";
import { createHash, generateToken, isValidPassword } from "../../shared";
import userCreateValidation from "../validations/user/UserCreate";
import { User } from "../entities/User";





class SessionManager {

    private userRepository: IUserRepository;

    constructor() {
        this.userRepository = container.resolve("UserRepository");
    }

    async login(email: string, password: string): Promise<void> {
        const user = await this.userRepository.getOneByEmail(email);
        if (!user.email) {
            throw new Error("User not found");
        }
        const isHashedPassword = await isValidPassword(password, user.password);
        if (!isHashedPassword) {
            throw new Error("Login failed, invalid password");
        }
        return await generateToken(user);
    }

    async signup(payload: User): Promise<User> {
        await userCreateValidation.parseAsync(payload)

        const dto = {
            ...payload,
            password: await createHash(payload.password)
        }

        const user = this.userRepository.create(dto);

        return {...user, password: undefined};
    }

   
}


export default SessionManager;