import database from "../../database";
import { HttpError } from "../../serializer/baseResponse";
import { listWarehouseResponse } from "../../serializer/warehouseResponse";

const db = database.getInstance();
export async function listWarehouses() {
  const SQL = "SELECT warehouse_id,name,location FROM warehouse";
  try {
    const response = await db.all(SQL, []);
    return listWarehouseResponse(response);
  } catch {
    throw new HttpError(500, "Internal Error");
  }
}
