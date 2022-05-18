import database from "../../database";
import { HttpError } from "../../serializer/baseResponse";
import { getWarehouseResponse } from "../../serializer/warehouseResponse";

const db = database.getInstance();
export async function getWarehouse(warehouseId: number) {
  const warehouseSQL = "SELECT * FROM warehouse WHERE warehouse_id=?";
  const itemSQL = "SELECT item_id,name,amount FROM inventory WHERE warehouse_id=?";
  let warehouseData;
  let itemData;
  try {
    warehouseData = await db.get(warehouseSQL, [warehouseId]);
    itemData = await db.all(itemSQL, [warehouseId]);
  } catch {
    throw new HttpError(500, "Internal Error");
  }
  if (!warehouseData) throw new HttpError(404, "Warehouse not found");
  return getWarehouseResponse(warehouseData, itemData);
}
