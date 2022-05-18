import database from "../../database";
import { HttpError } from "../../serializer/baseResponse";
import { getItemResponse } from "../../serializer/inventoryResponse";

const db = database.getInstance();
export async function getItem(itemId: number) {
  const SQL = "SELECT * FROM inventory WHERE item_id=? LIMIT 1";
  let row;
  try {
    row = await db.get(SQL, [itemId]);
  } catch (err) {
    throw new HttpError(500, "Internal Error");
  }
  if (!row) throw new HttpError(404, "Item not found");
  return getItemResponse(row);
}
