import React from "react";
import { Grid, TextField } from "@mui/material";

interface Props {
  label: string;
}
export default function TextInput(props: Props) {
  const { label } = props;
  return (
    
      <TextField id="outlined-basic" label={label} variant="outlined" />
    
  );
}
