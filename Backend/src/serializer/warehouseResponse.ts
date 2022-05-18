export function createWarehouseResponse(warehouseCount: number, name: string, location: string) {
  return {
    data: {
      item_id: warehouseCount,
      name: name,
      location: location,
    },
  };
}

export function getWarehouseResponse(warehouse: any, items: any) {
  return {
    data: {
      warehouse_id: warehouse.warehouse_id,
      name: warehouse.name,
      items: items,
    },
  };
}

export function listWarehouseResponse(warehouses: any) {
  return {
    data: warehouses,
  };
}
