import { Button, Grid } from "@mui/material";
import "./SimpleButton.scss";
import React from "react";

export default function SimpleButton() {
  return (
    <Grid className="button" >
     <Button variant="outlined" className="button-session" color="secondary">Ingresar</Button>
    </Grid>
  );
}
