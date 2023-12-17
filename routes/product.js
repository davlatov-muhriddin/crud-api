import { Router } from "express";
import Products from "../models/Products.js";

const router = Router();

// get all products
router.get("/", async (req, res) => {
  try {
    const products = await Products.find({});

    res.status(200).json({
      products,
      message: "success",
    });
  } catch (error) {
    console.log(error);
  }
});

// get single product

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const product = await Products.findById(id);
    res.status(200).json({
      products: product,
      message: "success",
    });
  } catch (error) {
    console.log(error);
  }
});

// create product

router.post("/create", async (req, res) => {
  try {
    const { image, title, description, price } = req.body;

    if (!image || !title || !description || !price) {
      res.json({ message: "fill in all the inputs" });
      return;
    }

    const newProduct = {
      image,
      title,
      description,
      price,
    };

    const createProduct = await Products.create(newProduct);
    res.status(200).json({
      products: createProduct,
      message: "the product was created successfully",
    });
  } catch (error) {
    console.log(error);
  }
});

// update product
router.put("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const product = await Products.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(200).json({
      products: product,
      message: "the product has been updated successfully",
    });
  } catch (error) {
    console.log(error);
  }
});

// delete product

router.delete("/remove/:id", async (req, res) => {
  try {
    const id = req.params.id;

    await Products.findByIdAndDelete(id);
    res.status(200).json({
      message: "the product has been successfully uninstalled",
    });
  } catch (error) {
    console.log(error);
  }
});

export default router;
