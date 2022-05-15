import database from "../../database";
import { HttpError } from "../../serializer/baseSerializer";
import { getWarehouseResponse } from "../../serializer/warehouseSerializer";

const db = database.getInstance().getSqlDatabase();
export function getWarehouse(warehouseId: number) {
  return new Promise((resolve, reject) => {
    const SQL =
      "SELECT * FROM warehouse WHERE warehouse_id=(" + warehouseId + ")";

    db.get(SQL, [], (err, row) => {
      if (err) return reject(new HttpError(500, "Internal Error"));
      if (!row) {
        return reject(new HttpError(404, "Warehouse not found"));
      }
      const warehouseData = row;
      const SQL =
        "SELECT item_id,name,amount FROM inventory WHERE warehouse_id=(" +
        warehouseId +
        ")";

      db.all(SQL, (err, row) => {
        if (err) return reject(new HttpError(500, "Internal Error"));
        const response = getWarehouseResponse(warehouseData, row);
        resolve(response);
      });
    });
  });
}
