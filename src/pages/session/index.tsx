import React from "react";
import { Grid, Typography } from "@mui/material";
import "./Session.scss";
import TextInput from "../../components/kit/inputs/Text";
import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";
import InputPassword from "../../components/kit/inputs/Password";
import ButtonSession from "../../components/kit/inputs/Buttons/ButtonSession";
import ButtonText from "../../components/kit/inputs/Buttons/ButtonText";

export default function Session() {
  return (
    <Grid className="login" container>
      <Grid className="login-menu-img" item xs={8}>
        <img alt="" className="cochera" src="../images/cochera.jpg" />
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
              <Typography variant="body1">
                Bienvenido a nuestro sistema de gestion de cocheras
              </Typography>
            </Grid>

            <Grid className="user">
              <TextInput label="¿Cuál es tu usuario?"></TextInput>
              <InputPassword label="¿y tu contraseña?"></InputPassword>
            </Grid>
          </Grid>
          <Grid>
            <ButtonSession></ButtonSession>
          </Grid>
          <Grid className="change-password">
            <ButtonText subtitle="" title="Cambia tu contraseña"></ButtonText>
          </Grid>
        </Grid>
        <Grid container className="creators" >
          <Grid className="created"  item xs={3}>
            <Typography variant="body2"> Creado por: </Typography>
          </Grid>
          <Grid item xs={4.5}>
            <ButtonText subtitle="https://github.com/GradacMarcos"  title=" Gradac Marcos "></ButtonText>
          </Grid>
          <Grid item xs={4.5}>
            <ButtonText subtitle="https://github.com/rojomaldit" title="Lucas Caballero"></ButtonText>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
