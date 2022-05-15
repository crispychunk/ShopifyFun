import { createWarehouse } from "../services/Warehouse/createWarehouse";
import { deleteWarehouse } from "../services/Warehouse/deleteWarehouse";
import { getWarehouse } from "../services/Warehouse/getWarehouse";
import { listWarehouses } from "../services/Warehouse/listWarehouses";
export class warehouseController {
  static sendError(res, error: any) {
    res.status(error.status);
    res.send(error.message);
  }

  static create(req, res) {
    const { name, location } = req.body;
    createWarehouse(name, location)
      .then((response) => {
        res.send(response);
      })
      .catch((error) => {
        this.sendError(res, error);
      });
  }

  static get(req, res) {
    const warehouseId = req.params.warehouseId;
    getWarehouse(warehouseId)
      .then((response) => {
        res.send(response);
      })
      .catch((error) => {
        this.sendError(res, error);
      });
  }

  static delete(req, res) {
    const warehouseId = req.params.warehouseId;
    deleteWarehouse(warehouseId)
      .then((response) => {
        res.send(response);
      })
      .catch((error) => {
        this.sendError(res, error);
      });
  }

  static list(req, res) {
    listWarehouses().then((response) => {
      res.send(response);
    });
  }
}
