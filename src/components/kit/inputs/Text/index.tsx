import React from "react";
import { Grid, TextField } from "@mui/material";
import "./TextInput.scss";

interface Props {
  label: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}
export default function TextInput(props: Props) {
  const { label } = props;
  return (
    <Grid>
      <Grid className="id">
        <TextField
          onChange={(event) => props.onChange(event.target.value)}
          id="outlined-basic"
          label={label}
          variant="outlined"
        />
      </Grid>
    </Grid>
  );
}
