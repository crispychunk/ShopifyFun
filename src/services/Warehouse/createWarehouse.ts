import database from "../../database";
import { createWarehouseResponse } from "../../serializer/warehouseResponse";
import { HttpError } from "../../serializer/baseResponse";

const SQL = "INSERT INTO warehouse(warehouse_id,name, location) VALUES(?,?,?)";
let warehouseCount = 1;
const db = database.getInstance();

export async function createWarehouse(name: string, location: string) {
  if (name == undefined || location == undefined) {
    throw new HttpError(400, "Missing warehouse count or location");
  }
  try {
    await db.run(SQL, [warehouseCount, name, location]);
    const response = createWarehouseResponse(warehouseCount, name, location);
    warehouseCount = warehouseCount + 1;
    return response;
  } catch {
    throw new HttpError(500, "Internal Error");
  }
}
