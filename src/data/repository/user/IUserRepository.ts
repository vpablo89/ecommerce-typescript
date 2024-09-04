import User from "@/domain/entities/User"
import { Criteria, IUsersDTO } from "@/types"



export interface IUserRepository
{
    paginate(criteria: Criteria): Promise<IUsersDTO>

    create(product: User): Promise<void>

    getOne(id: string): Promise<User>

    deleteById(_id: string):Promise<void>

    update(id:string,  body: User): Promise<void>
}
