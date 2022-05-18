import database from "../../database";
import { HttpError } from "../../serializer/baseResponse";
import { getListResponse } from "../../serializer/inventoryResponse";

const db = database.getInstance();
export async function getList() {
  const SQL = "SELECT item_id,name,amount,warehouse_id FROM inventory";
  try {
    const rows = await db.all(SQL, []);
    return getListResponse(rows);
  } catch {
    throw new HttpError(500, "Internal Error");
  }
}
