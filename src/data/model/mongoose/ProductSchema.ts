import mongoose, { Document, Schema} from "mongoose"
import mongoosePaginate from 'mongoose-paginate-v2'



const ProductCollection: string = 'products'

export interface IProductMongoose extends Document {
    title: string;
    description: string;
    code: string;
    price: number;
    status: string;
    stock: number;
    category: string;
    thumbnail: string;
  }
  
  const ProductSchema: Schema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    code: { type: String, required: true },
    price: { type: Number, required: true },
    status: { type: String, required: true },
    stock: { type: Number, required: true },
    category: { type: String, required: true },
    thumbnail: { type: String, required: true },
  });
  
  // Apply the pagination plugin
  ProductSchema.plugin(mongoosePaginate);
  
  const ProductModel = mongoose.model<IProductMongoose>(ProductCollection, ProductSchema);
  
  export default ProductModel;

