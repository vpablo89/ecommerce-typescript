import { IUserRepository } from "../IUserRepository";
import UserSchema from "../../../model/user/mongoose/UserSchema"
import User from "../../../../domain/entities/User";
import { Criteria, IUserDocument, IUsersDTO } from "@/types";
import { UsersDTO } from "../../../../domain/dto/UsersDTO";
import { RoleNames } from "@/enums";



class UserMongooseRepository implements IUserRepository {
    private userSchema

    constructor() {
        this.userSchema = UserSchema
    }
    
    async paginate(criteria: Criteria): Promise<IUsersDTO> {
        const { limit, page } = criteria
        
        const userDocuments = await this.userSchema.paginate<IUserDocument>({}, { limit, page })
        const { docs, ...pagination } = userDocuments
        
        const users: User[] = docs.map((user: any) => new User({
            id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password,
            age: user.age,
            isAdmin: user.isAdmin,
            role: user.role
        }))
        return new UsersDTO(users, pagination)
    }
    async create(user: User): Promise<User>
    {
        await this.userSchema.create(user)

        return new User({
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password,
            age: user.age,
            isAdmin: user.isAdmin,
            role: user.role
        })
    }
    async getOne(id: string): Promise<User>
    {
        const user: any = await this.userSchema.findById(id)
        
        return new User({
            id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password,
            age: user.age,
            isAdmin: user.isAdmin,
            role: user.role
        })
    }
    async getOneByEmail(email: string): Promise<User> {
        const user: any = await this.userSchema.findOne({ email})

        return new User({
            id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password,
            age: user.age,
            isAdmin: user.isAdmin,
            role: user.role
        })

    }
    async deleteById(id: string): Promise<void> {
        await this.userSchema.deleteOne({ _id: id })
    }
    async update(id: string, body: User): Promise<void> {
        await this.userSchema.updateOne({ _id: id   }, body)
    }
    async setRole(id: string, roleName: RoleNames): Promise<void> {
        const user = await this.userSchema.findById(id)
        if(!user){
            throw new Error('User not found')
        }
        user.role.name = roleName
        await user.save()
    }
}


export default UserMongooseRepository;