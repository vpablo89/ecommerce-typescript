
import mongoose, {  Document, Schema} from "mongoose"
import mongoosePaginate from 'mongoose-paginate-v2'


const ProductCollection: string = 'products'

export interface IProduct extends Document
{
  title: string;
  description: string;
  code: string;
  price: number;
  status: boolean;
  stock: number;
  category: string;
  thumbnail: string;
}



  
  const ProductSchema: Schema = new Schema<IProduct>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    code: { type: String, required: true },
    price: { type: Number, required: true },
    status: { type: Boolean, required: true },
    stock: { type: Number, required: true },
    category: { type: String, required: true },
    thumbnail: { type: String, required: true }
  });
  
  
  // Apply the pagination plugin
  ProductSchema.plugin(mongoosePaginate);
  
  const ProductModel = mongoose.model<IProduct>(ProductCollection, ProductSchema);
  
  export default ProductModel;
 

  


 