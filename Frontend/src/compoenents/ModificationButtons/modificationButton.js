import { Button, ButtonGroup } from "@mui/material";
import * as React from "react";
import { DeleteButton } from "./deleteButton";
import { EditItemButton } from "./ediltButton";
import { MoveItemButton } from "./moveButton";
export function ModifcationButtons(props) {
  return (
    <div>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <EditItemButton {...props}></EditItemButton>
        <MoveItemButton {...props}></MoveItemButton>
        <DeleteButton {...props}></DeleteButton>
      </ButtonGroup>
    </div>
  );
}
