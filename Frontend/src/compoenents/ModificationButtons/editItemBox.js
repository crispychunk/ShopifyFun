import * as React from "react";
import { Button, TextField } from "@mui/material";
import axios from "axios";

const baseURL = "http://localhost:8000/inventory/item/";
export function EditItemBox(props) {
  const { handleClose, refreshData, row } = props;
  const [ItemName, setItemName] = React.useState(row.name);
  const [ItemAmount, setItemAmount] = React.useState(row.amount);

  const nameTextHandler = (e) => {
    setItemName(e.target.value);
  };

  const countTextHandler = (e) => {
    setItemAmount(e.target.value);
  };
  const editItemHandler = async () => {
    const URL = baseURL + row.item_id;
    const body = {
      itemName: ItemName,
      amount: ItemAmount,
    };
    await axios
      .put(URL, body)
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
  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <h1>Edit</h1>
        <TextField
          id="name"
          label="Item Name"
          variant="outlined"
          value={ItemName}
          onChange={nameTextHandler}
        />
        <TextField
          id="amount"
          label="Count"
          value={ItemAmount}
          variant="outlined"
          onChange={countTextHandler}
        />
      </div>
      <Button onClick={editItemHandler}>Done</Button>
    </div>
  );
}
