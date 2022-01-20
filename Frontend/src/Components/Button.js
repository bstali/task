import React from "react";
import Button from "@mui/material/Button";

export default function Btn(props) {
  return (
    <>
      <Button
        label={props.label}
        type={props.type}
        maxLength={props.maxLength}
        id={props.id}
        variant="contained"
      >
        Save
      </Button>
    </>
  );
}
