import { Schema } from "mongoose"


const ProductCollection: string =  'products'

const productSchema: Schema = new Schema({
    title: {type: Schema.Types.String, required:[true, 'Title required'] },
    description: { type: Schema.Types.String, required: [true, 'Description required']},
    code: {type: Schema.Types.String, required: [true, 'Code required']},
    price:{type: Schema.Types.Number, required:[true, 'Price required'], default: 0},
    status:{type: Schema.Types.Boolean, default: true},
    stock: {type: Schema.Types.Number, required: [true, 'Stock required'], default: 0},
    category: {type: Schema.Types.String, required: [true, 'Category required']},
    thumbnail:{type: Schema.Types.Array, required: [false, 'No thumbnail required']}

})