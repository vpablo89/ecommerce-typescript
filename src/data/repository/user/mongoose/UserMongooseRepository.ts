import { Criteria, IUserRepository } from "../IUserRepository";
import UserSchema, { IUserDocument } from "../../../model/user/mongoose/UserSchema"
import User from "@/domain/entities/User";



class UserMongooseRepository implements IUserRepository
{
    private Schema

    constructor()
    {
        this.Schema = UserSchema
    }


    async paginate(criteria: Criteria): Promise<any>
    {
        const { limit, page } = criteria

        const userDocuments = await UserSchema.paginate({}, { limit, page })
        const { docs, ...pagination } = userDocuments

        const users: User[] = docs.map((user: any)=> new User({
            id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password,
            age: user.age,
            isAdmin: user.isAdmin,
            role: user.role
        }))
    }
    
    
}


export default UserMongooseRepository;