import express from "express";
import { loadRoutes } from "./routes";
import Db from "./database";

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

loadRoutes(app);
Db.getInstance(); // Instantiate database so no cold start
app.listen(8000, () =>
  console.log("Shopify inventory tracker listening on port 3000!")
);
