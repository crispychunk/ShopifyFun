import Button from "@mui/material/Button";
import { InventoryTable } from "./inventoryTable";
import { CreateItemModal } from "./createItems/createItemModal";
import axios from "axios";
import { useState, useEffect } from "react";
import { WarehouseTable } from "./WarehouseTable";
import { CreateWarehouseModal } from "./createWarehouses/createWarehouseModal";
export function Inventory(props) {
  const [inventoryData, setInventoryData] = useState("");
  const [warehouseData, setWarehouseData] = useState("");

  const getInventorydata = () => {
    const URL = "http://localhost:8000/inventory/items";
    axios.get(URL).then((response) => {
      setInventoryData(response["data"]);
    });
  };

  const getWarehousedata = () => {
    const URL = "http://localhost:8000/warehouses";
    axios.get(URL).then((response) => {
      setWarehouseData(response["data"]);
    });
  };

  const reFetchInventorydata = () => {
    getInventorydata();
    getWarehousedata();
  };

  useEffect(() => {
    getInventorydata();
    getWarehousedata();
  }, []);
  return (
    <div>
      <CreateItemModal refreshData={reFetchInventorydata}></CreateItemModal>
      <div>
        <InventoryTable
          rowData={inventoryData}
          warehouseData={warehouseData}
          refreshData={reFetchInventorydata}
        ></InventoryTable>
        <CreateWarehouseModal refreshData={reFetchInventorydata}></CreateWarehouseModal>
        <WarehouseTable rowData={warehouseData} refreshData={reFetchInventorydata}></WarehouseTable>
      </div>
    </div>
  );
}
