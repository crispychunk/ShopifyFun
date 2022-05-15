import database from "../../database";
import { HttpError } from "../../serializer/baseSerializer";

const db = database.getInstance().getSqlDatabase();

export function deleteWarehouse(warehouseId: number) {
  return new Promise((resolve, reject) => {
    const SQL = "DELETE FROM warehouse WHERE item_id=(" + warehouseId + ")";

    db.run(SQL, (err) => {
      if (err) return reject(new HttpError(500, "Internal Error"));
      resolve(null);
    });
  });
}
