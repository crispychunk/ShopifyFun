import * as React from "react";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const baseURL = "http://localhost:8000/inventory/item/";
export function MoveItemBox(props) {
  const { handleClose, refreshData, row, warehouseData } = props;
  const [warehouse, SetWarehouse] = React.useState("");

  const handleChange = (event) => {
    SetWarehouse(event.target.value);
  };
  const editItemHandler = async () => {
    console.log(warehouse);
    const URL = baseURL + row.item_id + "/move";
    const body = {
      warehouseId: warehouse,
    };
    await axios
      .post(URL, body)
      .then((response) => {
        if (response.status == 200) {
          console.log("Success post");
          handleClose();
          refreshData();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const generateWarehouseMenu = () => {
    const data = [];
    for (let i in warehouseData.data) {
      const row = warehouseData.data[i];
      data.push(row);
    }
    return data.map((row) => {
      return (
        <MenuItem key={row.warehouse_id} value={row.warehouse_id}>
          {row.warehouse_id} || {row.name} at {row.location}
        </MenuItem>
      );
    });
  };
  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <h1>Move</h1>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Warehouse</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={warehouse}
            label="warehouse"
            onChange={handleChange}
          >
            {generateWarehouseMenu()}
          </Select>
        </FormControl>
      </div>
      <Button onClick={editItemHandler}>Done</Button>
    </div>
  );
}
