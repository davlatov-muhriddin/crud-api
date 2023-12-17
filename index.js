import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import productsRouter from "./routes/product.js";

const app = express();
dotenv.config();

app.use(express.json());

app.use("/api/products", productsRouter);

app.get("/", (req, res) => {
  res.send(`
    get: /api/products
    post: /api/products/create
    put: /api/products//update/:id
    delete: /remove/:id
  `);
});

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
  })
  .then(() => console.log("mongo db connected"));

app.listen(process.env.PORT, () => {
  console.log("server is running...");
});
