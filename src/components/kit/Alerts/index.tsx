import { Alert, AlertColor, Grid } from "@mui/material";
import "./Alert.scss";

interface Props {
  severity: AlertColor;
  message: string;
}

export default function Alerts(props: Props) {
  return (
    <Grid className="alert-style">
      <Alert  variant="filled"  className="alert" severity={props.severity}>{props.message}</Alert>
    </Grid>
  );
}
