import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import "./Session.scss";
import TextInput from "../../components/kit/inputs/Text";
import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";
import InputPassword from "../../components/kit/inputs/Password";

export default function Session() {
  return (
    <Grid className="login" container>
      <Grid className="login-menu-img" item xs={8}>
        <img
          className="cochera"
          src="https://www.clarin.com/img/2016/07/06/SyxqkC3K4x_1256x620.jpg"
        />
      </Grid>
      <Grid className="login-menu" item xs={4}>
        <Grid className="session">
          <Grid container>
            <Grid item xs={4}>
              <EmojiTransportationIcon
                color="secondary"
                sx={{ fontSize: 60 }}
              />
            </Grid>
            <Grid className="subtitle1" item xs={8}>
              <Typography variant="body1">Cocheras</Typography>
            </Grid>
            <Grid className="subtitle2">
              <Typography variant="h6">
                Administra tus propiedades y alquileres en un solo lugar
              </Typography>
            </Grid>
            <Grid className="user">
              <TextInput label="¿Cuál es tu usuario?"></TextInput>
              <InputPassword label="¿y tu contraseña?"></InputPassword>
            </Grid>
            <Grid >
            <Button className="button" variant="outlined">Outlined</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
