import { Button } from "@mui/material";
import * as React from "react";
import axios from "axios";

const baseURL = "http://localhost:8000/inventory/item/";
export function DeleteButton(props) {
  const { row, refreshData } = props;

  const handleDelete = async () => {
    console.log(row);
    const URL = baseURL + row.item_id;
    console.log(URL);
    await axios
      .delete(URL)
      .then((response) => {
        if (response.status == 200) {
          console.log("Sucess delete");
          refreshData();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Button onClick={handleDelete}>Delete</Button>
    </div>
  );
}
