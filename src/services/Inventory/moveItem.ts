import database from "../../database";
import { HttpError } from "../../serializer/baseSerializer";

const db = database.getInstance().getSqlDatabase();
export function moveItem(itemId: number, warehouseId: number) {
  return new Promise((resolve, reject) => {
    const COLUMN = "warehouse_id=" + warehouseId;
    const SQL =
      "UPDATE inventory SET " + COLUMN + " WHERE item_id=(" + itemId + ")";
    db.run(SQL, [], (err, row) => {
      if (!row) return reject(new HttpError(400, "Warehouse not found"));
      if (err) return reject(new HttpError(500, "Internal Error"));
      resolve(null);
    });
  });
}
