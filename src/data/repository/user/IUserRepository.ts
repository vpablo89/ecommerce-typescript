import { RoleNames } from "@/enums"
import User from "../../../domain/entities/User"
import { Criteria, IUsersDTO } from "@/types"



export interface IUserRepository
{
    paginate(criteria: Criteria): Promise<IUsersDTO>

    create(product: User): Promise<User>

    getOne(id: string): Promise<User>

    getOneByEmail(email: string): Promise<User>

    deleteById(_id: string):Promise<void>

    update(id:string,  body: User): Promise<void>

    setRole(userId: string, roleName: RoleNames): Promise<void>
}
