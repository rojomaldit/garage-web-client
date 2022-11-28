import { Button, Grid } from "@mui/material";
import "./ButtonSession.scss";

interface Props {
  title: string;
  onClick: () => void;
}

export default function ButtonSession(props: Props) {
  return (
    <Grid className="button">
      <Button
        onClick={props.onClick}
        variant="outlined"
        className="button-session"
        color="secondary"
      >
        {props.title}
      </Button>
    </Grid>
  );
}
