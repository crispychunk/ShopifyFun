import database from "../../database";
import { HttpError } from "../../serializer/baseResponse";

const db = database.getInstance();
export async function deleteItems() {
  const SQL = "DELETE FROM inventory";
  try {
    await db.run(SQL, []);
  } catch {
    throw new HttpError(500, "Internal Error");
  }
}
