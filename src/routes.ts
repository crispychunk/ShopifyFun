import inventoryController from "./controller/inventoryController";

export function loadRoutes(app) {
  // Inventory items
  app.get("/inventory/item/:item", (req, res) => {
    inventoryController.get(req, res);
  });
  app.post("/inventory/item/:item", (req, res) => {
    inventoryController.create(req, res);
  });
  app.patch("/inventory/item/:item", (req, res) => {
    inventoryController.update(req, res);
  });
  app.delete("/inventory/item/:item", (req, res) => {
    inventoryController.delete(req, res);
  });
}
