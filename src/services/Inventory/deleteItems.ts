import database from "../../database";
import { HttpError } from "../../serializer/baseSerializer";

const db = database.getInstance().getSqlDatabase();
export function deleteItems() {
  return new Promise((resolve, reject) => {
    const SQL = "DELETE FROM inventory";

    db.run(SQL, (err) => {
      if (err) return reject(new HttpError(500, "Internal Error"));
      resolve(null);
    });
  });
}
