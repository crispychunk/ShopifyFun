import database from "../../database";
import { HttpError } from "../../serializer/baseResponse";

const db = database.getInstance();
export async function updateItem(itemId: number, itemName: string, amount: number) {
  const SQL = "UPDATE inventory SET name=?, amount=? WHERE item_id=?";

  if (itemName == undefined || amount == undefined) {
    throw new HttpError(400, "Missing itemName or amount");
  }
  try {
    await db.run(SQL, [itemName, amount, itemId]);
  } catch (err) {
    console.log(err);
    throw new HttpError(500, "Internal Error");
  }
}
