import database from "../../database";
import { HttpError } from "../../serializer/baseResponse";

const db = database.getInstance();

export async function deleteWarehouse(warehouseId: number) {
  const SQL = "DELETE FROM warehouse WHERE warehouse_id=?";
  try {
    await db.run(SQL, [warehouseId]);
  } catch {
    throw new HttpError(500, "Internal Error");
  }
}
