import React from "react";
import { Grid, TextField } from "@mui/material";
import "./TextInput.scss";

interface Props {
  label: string;
}
export default function TextInput(props: Props) {
  const { label } = props;
  return (
    <Grid>
      <Grid>
        <TextField id="outlined-basic" label={label} variant="outlined" />
      </Grid>
      
    </Grid>
  );
}
