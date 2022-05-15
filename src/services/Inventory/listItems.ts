import database from "../../database";
import { HttpError } from "../../serializer/baseSerializer";
import { getListResponse } from "../../serializer/inventorySerializer";

const db = database.getInstance().getSqlDatabase();
export function getList() {
  return new Promise((resolve, reject) => {
    const SQL = "SELECT item_id,name,amount FROM inventory";

    db.all(SQL, (err, row) => {
      if (err) return reject(new HttpError(500, "Internal Error"));
      const response = getListResponse(row);
      resolve(response);
    });
  });
}
