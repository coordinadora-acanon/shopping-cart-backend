import express from "express";
import cors from "cors";

import { CartController } from "./controllers/cart.controller";
import { ProductController } from "./controllers/product.controller";
import { requestLogger } from "./middleware/loggerMiddleware";

const app = express();
app.use(express.json());
app.use(cors());
app.use(requestLogger);

app.get("/cart", CartController.getCart);
app.post("/cart", CartController.addItem);
app.delete("/cart/:id", CartController.removeItem);
app.delete("/cart", CartController.clearCart);

app.get("/products", ProductController.getProducts);

export default app;
