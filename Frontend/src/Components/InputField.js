import React from "react";
import TextField from "@mui/material/TextField";

export default function InputField(props) {
  return (
    <>
      <TextField
        label={props.label}
        type={props.type}
        maxLength={props.maxLength}
        id={props.id}
        variant="outlined"
      />
    </>
  );
}
