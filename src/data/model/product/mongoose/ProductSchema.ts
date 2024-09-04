import { IProductDocument } from "@/types";
import mongoose, {  Schema } from "mongoose"
import mongoosePaginate from 'mongoose-paginate-v2'

const ProductCollection: string = 'products'



const ProductSchema: Schema = new Schema<IProductDocument>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  code: { type: String, required: true },
  price: { type: Number, required: true },
  status: { type: Boolean, required: true },
  stock: { type: Number, required: true },
  category: { type: String, required: true },
  thumbnail: { type: String, required: true }
});

ProductSchema.plugin(mongoosePaginate);

const ProductModel = mongoose.model<IProductDocument>(ProductCollection, ProductSchema);

export default ProductModel;





