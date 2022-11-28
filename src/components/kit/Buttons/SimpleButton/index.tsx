import { Button, Grid } from "@mui/material";
import "./SimpleButton.scss";

interface Props {
  title: string;
  onClick: () => void;
}

export default function SimpleButton(props: Props) {
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
