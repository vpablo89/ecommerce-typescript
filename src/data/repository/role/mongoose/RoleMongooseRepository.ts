import Role from "../../../../domain/entities/Role";
import RoleSchema from "../../../model/role/mongoose/RoleSchema"
import { IRoleRepository } from "../IRoleRepository";





class RoleMongooseRepository implements IRoleRepository
{
    private roleSchema

    constructor() {
        this.roleSchema = RoleSchema
    }
     async list(): Promise<Role[]> {
        return this.roleSchema.find()
        
    }
    async create(role: Role): Promise<void> {
        await this.roleSchema.create(role)
                  
    }

    async getOne(id: string): Promise<any> {
        return await this.roleSchema.findById(id)
    }

    async deleteById(_id: string): Promise<void> {
        await this.roleSchema.deleteOne({ _id })
    }

    async update(id: string, body: Role): Promise<void> {
        await this.roleSchema.updateOne({id}, body)
    }
    
}

export default RoleMongooseRepository;