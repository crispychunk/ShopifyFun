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
    res.status(error.status);
    res.send(error.message);
  }

  static create(req, res) {
    const { itemName, amount } = req.body;

    createItem(itemName, amount)
      .then((response) => {
        res.send(response);
      })
      .catch((error) => {
        this.sendError(res, error);
      });
  }

  static async get(req, res) {
    const itemId = req.params.itemId;

    getItem(itemId)
      .then((response) => {
        res.send(response);
      })
      .catch((error) => {
        this.sendError(res, error);
      });
  }

  static update(req, res) {
    const { itemName, amount } = req.body;
    const itemId = req.params.itemId;
    getItem(itemId)
      .then(() => {
        updateItem(itemId, itemName, amount)
          .then((response) => {
            res.send(response);
          })
          .catch((error) => {
            this.sendError(res, error);
          });
      })
      .catch((error) => {
        this.sendError(res, error);
      });
  }

  static delete(req, res) {
    const itemId = req.params.itemId;
    getItem(itemId)
      .then(() => {
        deleteItem(itemId)
          .then((response) => {
            res.send(response);
          })
          .catch((error) => {
            this.sendError(res, error);
          });
      })
      .catch((error) => {
        this.sendError(res, error);
      });
  }

  static list(req, res) {
    getList().then((response) => {
      res.send(response);
    });
  }

  static deleteAll(req, res) {
    deleteItems()
      .then((response) => {
        res.send(response);
      })
      .catch((error) => {
        this.sendError(res, error);
      });
  }

  static move(req, res) {
    const itemId = req.params.itemId;
    const { warehouseId } = req.body;
    getItem(itemId)
      .then(() => {
        moveItem(itemId, warehouseId)
          .then((response) => {
            res.send(response);
          })
          .catch((error) => {
            this.sendError(res, error);
          });
      })
      .catch((error) => {
        this.sendError(res, error);
      });
  }
}

export default InventoryController;
