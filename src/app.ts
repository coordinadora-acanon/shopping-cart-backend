import express from "express";
import { CartController } from "./controllers/cart.controller";
import { ProductController } from "./controllers/product.controller";

const app = express();
app.use(express.json());

app.get("/cart", CartController.getCart);
app.post("/cart", CartController.addItem);
app.delete("/cart/:id", CartController.removeItem);
app.delete("/cart", CartController.clearCart);

app.get("/products", ProductController.getProducts);

export default app;
