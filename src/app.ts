import express from "express";
import { loadRoutes } from "./routes";
import Db from "./database";

const app = express();
app.use(express.json());
loadRoutes(app);
Db.getInstance(); // Instantiate database so no cold start
app.listen(3000, () =>
  console.log("Shopify inventory tracker listening on port 3000!")
);
