import database from "../../database";
import { HttpError } from "../../serializer/baseSerializer";

const db = database.getInstance().getSqlDatabase();
export function updateItem(itemId: number, itemName: string, amount: number) {
  return new Promise((resolve, reject) => {
    if (itemName == undefined || amount == undefined) {
      return reject(new HttpError(400, "Missing itemName or amount"));
    }

    const COLUMN = "name='" + itemName + "', amount=" + amount;
    const SQL =
      "UPDATE inventory SET " + COLUMN + " WHERE item_id=(" + itemId + ")";
    db.run(SQL, [], (err) => {
      if (err) return reject(new HttpError(500, "Internal Error"));
      resolve(null);
    });
  });
}
