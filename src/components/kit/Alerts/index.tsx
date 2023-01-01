import { Alert, AlertColor, Grid } from "@mui/material";

interface Props {
  severity: AlertColor;
  message: string;
}

export default function Alerts(props: Props) {
  return (
    <Grid>
      <Alert severity={props.severity}>{props.message}</Alert>
    </Grid>
  );
}
