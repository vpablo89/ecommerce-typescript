import { Schema, model } from "mongoose"


const ProductCollection: string = 'products'

const ProductSchema: Schema = new Schema({
    title: {type: String },
    description: { type: String },
    code: {type: String, unique: true },
    price:{type: Number },
    status:{type: Boolean},
    stock: {type: Number,  },
    category: {type: String  },
    thumbnail:{type: String, require: true  }

})


export default model(ProductCollection, ProductSchema)

