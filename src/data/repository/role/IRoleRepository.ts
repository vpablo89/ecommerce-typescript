import Role from "@/domain/entities/Role"



export interface IRoleRepository
{
    list(): Promise<Role[]>

    create(role: Role): Promise<Role>

    getOne(id: string): Promise<Role>

    deleteById(_id: string):Promise<void>

    update(id:string,  body: Role): Promise<void>
}	