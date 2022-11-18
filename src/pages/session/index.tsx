import React from "react";
import { Grid, Typography } from "@mui/material";
import "./Session.scss";
import TextInput from "../../components/kit/inputs/Text";

export default function Session() {

  return (
    <Grid container className="session">
      <Grid container item xs={8} className="garage">
        {/* <img
          className="img-garage"
          src="https://www.cronista.com/files/image/142/142670/5ff79b238086b.png"
          alt=""
        /> */}
      </Grid>
      <Grid item xs={4}>
        <Grid container className="menu">
          
          <Grid item xs={10}>
            <Typography color="black" variant="subtitle1">
              alquileres online
            </Typography>
            <Grid>
              <Typography variant="h6">
                Administra tus propiedades y alquileres en un solo lugar
              </Typography>
              <TextInput label="sadasdas"></TextInput>
            </Grid>
            
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
