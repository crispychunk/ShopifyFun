import database from "../../database";
import { createItemResponse } from "../../serializer/inventorySerializer";
import { HttpError } from "../../serializer/baseSerializer";

const SQL = "INSERT INTO inventory(item_id,name, amount) VALUES(?,?,?)";
let itemCount = 1;
const db = database.getInstance().getSqlDatabase();

export function createItem(itemName: string, amount: number) {
  return new Promise((resolve, reject) => {
    if (itemName == undefined || amount == undefined) {
      return reject(new HttpError(400, "Missing itemName or amount"));
    }

    db.run(SQL, [itemCount, itemName, amount], (err) => {
      if (err) return reject(new HttpError(400, "Internal error"));
      const response = createItemResponse(itemCount, itemName, amount);
      itemCount = itemCount + 1;
      resolve(response);
    });
  });
}
