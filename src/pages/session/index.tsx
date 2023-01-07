import React, { useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import "./Session.scss";
import TextInput from "../../components/kit/Inputs/Text";
import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";
import InputPassword from "../../components/kit/Inputs/Password";
import { logIn } from "../../services/session";
import ButtonLevel from "../../components/kit/Buttons";

interface Props {
  setToken: React.Dispatch<React.SetStateAction<string>>;
}

export default function Session(props: Props) {
  const [user, setUser] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const handleLogin = () => {
    (async () => {
      const token = await logIn(user, password);

      if (!token) {
        return;
      }

      localStorage.setItem("access_token", token.access_token);

      // 8 hours to expirate token
      const expiration = new Date();
      expiration.setHours(expiration.getHours() + 8);
      localStorage.setItem("token_expiration", expiration.toString());

      props.setToken(token.access_token);
    })();
  };

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
            <Grid container>
              <Grid item xs={12} className="user">
                <TextInput
                  onChange={(user) => setUser(user)}
                  label="¿Cuál es tu usuario?"
                />
              </Grid>
              <Grid item xs={12}>
                <InputPassword
                  onChange={(pass) => setPassword(pass)}
                  label="¿Y tu contraseña?"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid className="session">
            <ButtonLevel
              variant="outlined"
              title="Ingresar"
              onClick={handleLogin}
            />
          </Grid>
          <Grid className="change-password">
            <ButtonLevel variant="text" title="Cambia tu contraseña" />
          </Grid>
        </Grid>
        <Grid container className="creators">
          <Grid className="created" item xs={3}>
            <Typography variant="body2"> Creado por: </Typography>
          </Grid>

          <ButtonLevel
            variant="text"
            href="https://github.com/GradacMarcos"
            title=" Gradac Marcos "
          />

          <ButtonLevel
            href="https://github.com/rojomaldit"
            variant="text"
            title="Lucas Caballero"
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
