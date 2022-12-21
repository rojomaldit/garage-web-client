import { Grid, Typography } from "@mui/material";
import ButtonMenu from "../kit/Buttons/ButtonMenu";
import "./MenuTop.scss";

interface Props {
  title: string;
}

export default function MenuTop(props: Props) {
  const { title } = props;
  return (
    <Grid container className="menu-top">
      <Grid className="menu-title" item xs={4}>
        <Typography variant="h5">{title}</Typography>
      </Grid>
      <Grid className="button" item xs={8}>
        <ButtonMenu onClick={() => onclick} title="Crear Nuevo" />
      </Grid>
    </Grid>
  );
}
