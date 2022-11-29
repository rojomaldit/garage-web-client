import { Grid, Typography } from "@mui/material";
import BasicMenu from "../../components/BasicMenu";
import "./Dashboard.scss";
export default function Dashboard() {
  return (
    <Grid className="dashboard" container>
      <Grid className="dashboard-title" item xs={12}>
        <Typography variant="h3">Inicio</Typography>
      </Grid>
      <Grid  className="graphic">
        <Typography variant="h3">ACA VA EL GRAFICO</Typography>
      </Grid>
    </Grid>
  );
}
