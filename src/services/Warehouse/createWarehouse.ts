import database from "../../database";
import { createWarehouseResponse } from "../../serializer/warehouseSerializer";
import { HttpError } from "../../serializer/baseSerializer";

const SQL = "INSERT INTO warehouse(warehouse_id,name, location) VALUES(?,?,?)";
let warehouseCount = 1;
const db = database.getInstance().getSqlDatabase();

export function createWarehouse(name: string, location: string) {
  return new Promise((resolve, reject) => {
    if (name == undefined || location == undefined) {
      return reject(new HttpError(400, "Missing warehouse count or location"));
    }

    db.run(SQL, [warehouseCount, name, location], (err) => {
      if (err) return reject(new HttpError(400, "Internal error"));
      const response = createWarehouseResponse(warehouseCount, name, location);
      warehouseCount = warehouseCount + 1;
      resolve(response);
    });
  });
}
