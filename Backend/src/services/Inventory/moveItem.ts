import database from "../../database";
import { HttpError } from "../../serializer/baseResponse";
import { getWarehouse } from "../Warehouse/getWarehouse";
const db = database.getInstance();
export async function moveItem(itemId: number, warehouseId: number) {
  const SQL = "UPDATE inventory SET warehouse_id=?,warehouse_name=? WHERE item_id=?";
  console.log(itemId);
  console.log(warehouseId);
  try {
    const warehouseData = await getWarehouse(warehouseId);
    await db.run(SQL, [warehouseId, warehouseData.data.name, itemId]);
  } catch {
    throw new HttpError(500, "Internal Error");
  }
}
