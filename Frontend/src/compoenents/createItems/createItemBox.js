import * as React from "react";
import { Button, TextField } from "@mui/material";
import axios from "axios";

const URL = "http://localhost:8000/inventory/item";
export function CreateItemBox(props) {
  const { handleClose, refreshData } = props;
  const [ItemName, setItemName] = React.useState();
  const [ItemAmount, setItemAmount] = React.useState();

  const nameTextHandler = (e) => {
    setItemName(e.target.value);
  };

  const countTextHandler = (e) => {
    setItemAmount(e.target.value);
  };
  const createItemHandler = async () => {
    handleClose();
    const body = {
      itemName: ItemName,
      amount: ItemAmount,
    };
    await axios
      .post(URL, body)
      .then((response) => {
        if (response.status == 200) {
          console.log("Sucess post");
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
        <h1>Create you item</h1>
        <TextField
          id="name"
          label="Item Name"
          variant="outlined"
          onChange={nameTextHandler}
        />
        <TextField
          id="amount"
          label="Count"
          variant="outlined"
          onChange={countTextHandler}
        />
      </div>
      <Button onClick={createItemHandler}>Create</Button>
    </div>
  );
}
