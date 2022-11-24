import { Button, Grid } from "@mui/material";
import React, { ReactNode } from "react";
import "./BasicMenu.scss";

interface Props {
  children?: ReactNode;
}

export default function BasicMenu(props: Props) {
  const { children } = props;
  return (
    <Grid container>
      <Grid className="BasicMenu" item xs={2}>
        <Grid className="logo">
          <img className="img-logo" src="images/logo.png" alt="" />
        </Grid>
        <Grid className="menu-item">
          <Button
            href="/dashboard"
            className="button-inicio"
            variant="contained"
          >
            Inicio
          </Button>
        </Grid>
        
        <Grid className="menu-item">
          <Button href="/vehicles" className="button-cars" variant="contained">
            Vehiculos
          </Button>
        </Grid>
        <Grid className="menu-item">
          <Button
            href="/garages"
            className="button-garages"
            variant="contained"
          >
            Cocheras
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={10}>
        {children}
      </Grid>
    </Grid>
  );
}
