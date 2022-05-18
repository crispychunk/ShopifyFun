import { createItem } from "../services/Inventory/createItem";
import { deleteItem } from "../services/inventory/deleteItem";
import { getItem } from "../services/Inventory/getItem";
import { getList } from "../services/Inventory/listItems";
import { updateItem } from "../services/Inventory/updateItem";
import { deleteItems } from "../services/Inventory/deleteItems";
import { moveItem } from "../services/Inventory/moveItem";
import { response } from "express";
class InventoryController {
  static sendError(res, error: any) {
    res.status(error.status).send(error.message);
  }

  static async create(req, res) {
    const { itemName, amount } = req.body;
    try {
      const response = await createItem(itemName, amount);
      res.send(response);
    } catch (err) {
      this.sendError(res, err);
    }
  }

  static async get(req, res) {
    const itemId = parseInt(req.params.itemId);
    try {
      const response = await getItem(itemId);
      res.send(response);
    } catch (err) {
      this.sendError(res, err);
    }
  }

  static async update(req, res) {
    const { itemName, amount } = req.body;
    const itemId = parseInt(req.params.itemId);
    try {
      await getItem(itemId);
      const response = updateItem(itemId, itemName, parseInt(amount));
      res.send(response);
    } catch (error) {
      console.log("ERROR");
      this.sendError(res, error);
    }
  }

  static async delete(req, res) {
    const itemId = parseInt(req.params.itemId);
    try {
      await getItem(itemId);
      const response = await deleteItem(itemId);
      res.send(response);
    } catch (error) {
      this.sendError(res, error);
    }
  }

  static async list(req, res) {
    try {
      const response = await getList();
      res.send(response);
    } catch (error) {
      this.sendError(res, error);
    }
  }

  static async deleteAll(req, res) {
    try {
      const response = await deleteItems();
      res.send(response);
    } catch (error) {
      this.sendError(res, error);
    }
  }

  static async move(req, res) {
    const itemId = parseInt(req.params.itemId);
    const { warehouseId } = req.body;

    try {
      await getItem(itemId);
      const response = await moveItem(itemId, parseInt(warehouseId));
      res.send(response);
    } catch (error) {
      this.sendError(res, error);
    }
  }
}

export default InventoryController;
