import express from "express";
import { loadRoutes } from "./routes";
const app = express();

loadRoutes(app);
app.listen(3000, () =>
  console.log("Shopify inventory tracker listening on port 3000!")
);
