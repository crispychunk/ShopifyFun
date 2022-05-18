import inventoryController from "./controller/inventoryController";
import { warehouseController } from "./controller/warehouseController";
export function loadRoutes(app) {
  // Single inventory
  app.get("/inventory/item/:itemId", (req, res) => {
    inventoryController.get(req, res);
  });
  app.post("/inventory/item", (req, res) => {
    inventoryController.create(req, res);
  });
  app.put("/inventory/item/:itemId", (req, res) => {
    inventoryController.update(req, res);
  });
  app.delete("/inventory/item/:itemId", (req, res) => {
    inventoryController.delete(req, res);
  });

  //global inventory
  app.get("/inventory/items", (req, res) => {
    inventoryController.list(req, res);
  });
  app.delete("/inventory/items", (req, res) => {
    inventoryController.deleteAll(req, res);
  });

  // Moving inventory

  app.post("/inventory/item/:itemId/move", (req, res) => {
    inventoryController.move(req, res);
  });

  //Warehouses
  app.post("/warehouse", (req, res) => {
    warehouseController.create(req, res);
  });
  app.delete("/warehouse/:warehouseId", (req, res) => {
    warehouseController.delete(req, res);
  });

  app.get("/warehouse/:warehouseId", (req, res) => {
    warehouseController.get(req, res);
  });

  app.get("/warehouses", (req, res) => {
    warehouseController.list(req, res);
  });
}
