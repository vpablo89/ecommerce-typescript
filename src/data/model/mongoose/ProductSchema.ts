
import mongoose, {  Schema} from "mongoose"
import mongoosePaginate from 'mongoose-paginate-v2'


const ProductCollection: string = 'products' 
  
  const ProductSchema: Schema = new Schema({
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
 

  


 