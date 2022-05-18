import database from "../../database";
import { HttpError } from "../../serializer/baseResponse";

const db = database.getInstance();
export async function deleteItem(itemId: number) {
  const SQL = "DELETE FROM inventory WHERE item_id= ?";

  try {
    await db.run(SQL, [itemId]);
  } catch {
    console.log("Error found");
    throw new HttpError(500, "Internal Error");
  }
}
