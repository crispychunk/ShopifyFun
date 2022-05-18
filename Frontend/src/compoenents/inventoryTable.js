import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { ModifcationButtons } from "./ModificationButtons/modificationButton";

const URL = "http://localhost:8000/inventory/items";

export function InventoryTable(props) {
  const { rowData } = props;
  const data = [];
  for (let i in rowData.data) {
    const row = rowData.data[i];
    row["id"] = i;
    data.push(row);
  }
  const columns = [
    { field: "item_id", headerName: "ID", width: 150 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "amount", headerName: "Amount", width: 150 },
    { field: "warehouse_name", headerName: "Warehouse", width: 150 },
    {
      field: "buttonGroup",
      headerName: "Modifications",
      width: 250,
      renderCell: (params) => {
        return <ModifcationButtons {...params} {...props}></ModifcationButtons>;
      },
    },
  ];
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={data} columns={columns} />
    </div>
  );
}
