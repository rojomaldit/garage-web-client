import { Button, Grid } from "@mui/material";
import "./ButtonSession.scss";
import React from "react";

export default function ButtonSession() {
  return (
    <Grid className="button" >
     <Button variant="outlined" className="button-session" color="secondary">Ingresar</Button>
    </Grid>
  );
}
