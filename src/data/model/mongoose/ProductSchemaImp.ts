import { Schema, model } from "mongoose"
import { IProduct } from "../IProduct"




const ProductCollection: string =  'products'

const ProductSchema: Schema = new Schema<IProduct>({
    title: {String, required:[true, 'Title required'] },
    description: { String, required: [true, 'Description required']},
    code: {String, required: [true, 'Code required']},
    price:{Number, required:[true, 'Price required'], default: 0},
    status:{Boolean, default: true},
    stock: {Number, required: [true, 'Stock required'], default: 0},
    category: {String, required: [true, 'Category required']},
    thumbnail:{String, required: [false, 'No thumbnail required']}

})


export default model<IProduct>(ProductCollection, ProductSchema)

