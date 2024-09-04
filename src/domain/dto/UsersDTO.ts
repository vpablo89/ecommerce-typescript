import { IUsersDTO } from "@/types";
import User from "../entities/User";


export class UsersDTO implements IUsersDTO{
    users: User[];
    pagination: Object;

    constructor(users: User[], pagination: Object)
    {
        this.users = users
        this.pagination = pagination
    }
}