import { createWarehouse } from "../services/Warehouse/createWarehouse";
import { deleteWarehouse } from "../services/Warehouse/deleteWarehouse";
import { getWarehouse } from "../services/Warehouse/getWarehouse";
import { listWarehouses } from "../services/Warehouse/listWarehouses";
export class warehouseController {
  static sendError(res, error: any) {
    res.status(error.status);
    res.send(error.message);
  }

  static async create(req, res) {
    const { name, location } = req.body;
    try {
      const response = await createWarehouse(name, location);
      res.send(response);
    } catch (error) {
      this.sendError(res, error);
    }
  }

  static async get(req, res) {
    const warehouseId = parseInt(req.params.warehouseId);
    try {
      const response = await getWarehouse(warehouseId);
      res.send(response);
    } catch (error) {
      this.sendError(res, error);
    }
  }

  static async delete(req, res) {
    const warehouseId = parseInt(req.params.warehouseId);
    try {
      await getWarehouse(warehouseId);
      const response = await deleteWarehouse(warehouseId);
      res.send(response);
    } catch (error) {
      this.sendError(res, error);
    }
  }

  static async list(req, res) {
    try {
      const response = await listWarehouses();
      res.send(response);
    } catch (error) {
      this.sendError(res, error);
    }
  }
}
