
import mongoose, { Document, Schema} from "mongoose"
import mongoosePaginate from 'mongoose-paginate-v2'
import { IProduct } from "../IProduct";



const ProductCollection: string = 'products'

export interface IProductMongoose extends IProduct, Document {
    paginate(): any
  }
  
  const ProductSchema: Schema = new Schema<IProductMongoose>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    code: { type: String, required: true },
    price: { type: Number, required: true },
    status: { type: Boolean, required: true },
    stock: { type: Number, required: true },
    category: { type: String, required: true },
    thumbnail: { type: String, required: true },
  });
  
  
  // Apply the pagination plugin
  ProductSchema.plugin(mongoosePaginate);
  
  const ProductModel = mongoose.model(ProductCollection, ProductSchema);
  
  export default ProductModel;
 

  


 