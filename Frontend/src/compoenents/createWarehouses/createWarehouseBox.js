import * as React from "react";
import { Button, TextField } from "@mui/material";
import axios from "axios";

const URL = "http://localhost:8000/warehouse";
export function CreateWarehouseBox(props) {
  const { handleClose, refreshData } = props;
  const [name, setItemName] = React.useState();
  const [location, setLocation] = React.useState();

  const nameTextHandler = (e) => {
    setItemName(e.target.value);
  };

  const locationTextHandler = (e) => {
    setLocation(e.target.value);
  };
  const createItemHandler = async () => {
    const body = {
      name: name,
      location: location,
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
  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <h1>Create your warehouse</h1>
        <TextField id="name" label="Warehouse Name" variant="outlined" onChange={nameTextHandler} />
        <TextField id="amount" label="Location" variant="outlined" onChange={locationTextHandler} />
      </div>
      <Button onClick={createItemHandler}>Create</Button>
    </div>
  );
}
