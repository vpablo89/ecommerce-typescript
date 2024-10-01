import { IRoleDocument } from "@/types"
import mongoose, { Schema } from "mongoose"
import mongoosePaginate from 'mongoose-paginate-v2'



const roleDocuments = 'roles'

const RoleSchema = new Schema<IRoleDocument>({
    name: { type: String, required: true },
    permissions: [{ type: String }],
})

RoleSchema.plugin(mongoosePaginate)

const RoleModel = mongoose.model<IRoleDocument>(roleDocuments, RoleSchema)

export default RoleModel