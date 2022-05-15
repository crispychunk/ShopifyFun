import database from "../../database";
import { HttpError } from "../../serializer/baseSerializer";
import { getItemResponse } from "../../serializer/inventorySerializer";

const db = database.getInstance().getSqlDatabase();
export function getItem(itemId: number) {
  return new Promise((resolve, reject) => {
    const SQL = "SELECT * FROM inventory WHERE item_id=(" + itemId + ")";

    db.get(SQL, [], (err, row) => {
      if (err) return reject(new HttpError(500, "Internal Error"));
      if (!row) {
        return reject(new HttpError(404, "Item not found"));
      }
      console.log(row);
      const response = getItemResponse(row);
      resolve(response);
    });
  });
}
