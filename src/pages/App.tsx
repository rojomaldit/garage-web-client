import React from "react";
import { Grid, Typography } from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import "./Garage.scss";
export default function Garage() {
  return (
    <Grid container>
      <Grid item xs={8} className="garage">
        <img
          className="img-garage"
          src="https://www.cronista.com/files/image/142/142670/5ff79b238086b.png"
          alt=""
        />
      </Grid>
      <Grid item xs={4}>
        <Grid container className="menu">
          <Grid item xs={3}>
            <DirectionsCarIcon color="secondary" sx={{ fontSize: 60 }} />
          </Grid>
          <Grid item xs={9}>
            <Typography color="black" variant="h5">
              alquileres
			  cochera
			  online
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
