import database from "../../database";
import { HttpError } from "../../serializer/baseResponse";

const db = database.getInstance();
export async function moveItem(itemId: number, warehouseId: number) {
  const SQL = "UPDATE inventory SET warehouse_id=? WHERE item_id=?";
  try {
    await db.run(SQL, [warehouseId, itemId]);
  } catch {
    throw new HttpError(500, "Internal Error");
  }
}
