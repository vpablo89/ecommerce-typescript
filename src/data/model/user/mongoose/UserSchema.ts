import { IUserDocument } from "@/types";
import mongoose, {  Schema } from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2'


const userDocuments = 'users'

const UserSchema: Schema = new Schema<IUserDocument>({

    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true, trim: true, lowercase: true },
    age: { type: Number, required: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },
    role: { type: Schema.Types.ObjectId, index: true, ref: 'roles', default: null },
})


UserSchema.plugin(mongoosePaginate)

const UserModel = mongoose.model<IUserDocument>(userDocuments, UserSchema)

export default UserModel