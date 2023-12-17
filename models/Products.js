import { Schema, model } from "mongoose";

const ProductSchema = new Schema({
  image: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
});

const Products = model("product", ProductSchema);
export default Products;
