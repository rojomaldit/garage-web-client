import React from "react";
import { Grid, Typography } from "@mui/material";
import "./Session.scss";
import TextInput from "../../components/kit/inputs/Text";
import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";
import InputPassword from "../../components/kit/inputs/Password";
import SimpleButton from "../../components/kit/Buttons/SimpleButton";
import ButtonText from "../../components/kit/Buttons/ButtonText";
import { logIn } from "../../services/session";

interface Props {
  setToken: React.Dispatch<React.SetStateAction<string>>;
}

export default function Session(props: Props) {
  const [user, setUser] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const handleLogin = () => {
    (async () => {
      const token = await logIn(user, password);
      props.setToken(token.access_token);
      localStorage.setItem("access_token", (token.access_token));
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
                <TextInput onChange={setUser} label="¿Cuál es tu usuario?" />
              </Grid>
              <Grid item xs={12}>
                <InputPassword
                  onChange={setPassword}
                  label="¿Y tu contraseña?"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid>
            <SimpleButton title="Ingresar" onClick={handleLogin} />
          </Grid>
          <Grid className="change-password">
            <ButtonText subtitle="" title="Cambia tu contraseña" />
          </Grid>
        </Grid>
        <Grid container className="creators">
          <Grid className="created" item xs={3}>
            <Typography variant="body2"> Creado por: </Typography>
          </Grid>

          <ButtonText
            subtitle="https://github.com/GradacMarcos"
            title=" Gradac Marcos "
          />

          <ButtonText
            subtitle="https://github.com/rojomaldit"
            title="Lucas Caballero"
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
