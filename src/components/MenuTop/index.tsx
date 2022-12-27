import { Grid, Typography } from "@mui/material";
import ButtonLevel from "../kit/Buttons";
import "./MenuTop.scss";

interface Props {
  title: string;

  button?: {
    onClick: () => void;
    title: string;
  };
}

export default function MenuTop(props: Props) {
  const { title, button } = props;
  return (
    <Grid container className="menu-top">
      <Grid item xs={6} className="menu-title">
        <Typography variant="h5">{title}</Typography>
      </Grid>
      <Grid className="button-menu" item xs={6}>
        {button && (
          <ButtonLevel title={button.title} onClick={button.onClick} />
        )}
      </Grid>
    </Grid>
  );
}
