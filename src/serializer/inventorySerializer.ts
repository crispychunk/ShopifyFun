export function createItemResponse(
  itemCount: number,
  itemName: string,
  amount: number
) {
  return {
    data: {
      item_id: itemCount,
      name: itemName,
      amount: amount,
    },
  };
}

export function getItemResponse(row: any) {
  return {
    data: {
      item_id: row.item_id,
      name: row.name,
      amount: row.amount,
      warehouse_id: row.warehouse_id,
    },
  };
}

export function getListResponse(rows: any) {
  return {
    data: rows,
  };
}
