import { Grid, Typography } from "@mui/material";
import "./MenuTop.scss";

interface Props {
  title: string;
}

export default function MenuTop(props: Props) {
  const { title } = props;
  return (
    <Grid container className="menu-top">
      <Grid className="menu-title">
        <Typography variant="h5">{title}</Typography>
      </Grid>
    </Grid>
  );
}
