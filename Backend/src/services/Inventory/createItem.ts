import database from "../../database";
import { createItemResponse } from "../../serializer/inventoryResponse";
import { HttpError } from "../../serializer/baseResponse";

const SQL = "INSERT INTO inventory(item_id,name, amount) VALUES(?,?,?)";
let itemCount = 1;
const db = database.getInstance();

export async function createItem(itemName: string, amount: number) {
  if (itemName == undefined || amount == undefined) {
    throw new HttpError(400, "Missing itemName or amount");
  }
  try {
    await db.run(SQL, [itemCount, itemName, amount]);
  } catch (err) {
    throw new HttpError(400, "Internal error");
  }
  const response = createItemResponse(itemCount, itemName, amount);
  itemCount = itemCount + 1;
  return response;
}
