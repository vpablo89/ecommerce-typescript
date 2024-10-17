import container from "../../container"
import { IRoleRepository } from "@/data/repository/role/IRoleRepository"
import Role from "../entities/Role"
import createRoleValidation from "../validations/role/createRoleValidation"
import { RoleNames } from "../../enums"






export default class RoleManager
{
    private roleRepository: IRoleRepository

    constructor(){
        this.roleRepository = container.resolve("RoleRepository")
    }
    
    
    public async list(): Promise<Role[]>
    {
        return this.roleRepository.list()
    }

    public async create(role: Role): Promise<void>
    {
        await createRoleValidation.parseAsync(role)
        
        if(role.name !== RoleNames.ADMIN && role.name !== RoleNames.USER){
            throw new Error('Role name is invalid')
        }
        await this.roleRepository.create(role)
    }

    public async getOne(id: string): Promise<Role>
    {
        return this.roleRepository.getOne(id)
    }

    public async deleteById(id: string): Promise<void>
    {
        return this.roleRepository.deleteById(id)
    }

    public async update(id: string, role: Role): Promise<void>
    {
        return this.roleRepository.update(id, role)
    }

}