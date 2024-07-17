import { Schema, model } from "mongoose"


const ProductCollection: string = 'products'

const ProductSchema: Schema = new Schema({
    title: {String },
    description: { String },
    code: {String  },
    price:{Number },
    status:{Boolean},
    stock: {Number  },
    category: {String  },
    thumbnail:{String  }

})


export default model(ProductCollection, ProductSchema)

