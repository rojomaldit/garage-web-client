import { Grid, Typography } from "@mui/material";
import ButtonText from "../../components/kit/Buttons/ButtonText";
import "./Dashboard.scss";
import DashboardGraphic from "./Graphic";
export default function Dashboard() {
  return (
    <Grid className="dashboard" container>
      <Grid className="dashboard-title" item xs={12}>
        <Typography variant="h3">Inicio</Typography>
      </Grid>
      <Grid className="graphic">
        <DashboardGraphic></DashboardGraphic>
      </Grid>
      <Grid className="data-garage" container>
        <Grid item xs={4}>
          <ButtonText
            subtitle="http://localhost:3000/garages"
            title="Cocheras Disponibles"
          />
          <Typography>12</Typography>
        </Grid>
        <Grid className="occupied-garages" item xs={8}>
          <Typography color="secondary">cocheras ocupadas</Typography>
          <Grid>
            <Typography>30</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container className="pending-collection">
        <Grid item xs={4}>
          <ButtonText
            subtitle="http://localhost:3000/vehicles"
            title="Pendiente de Cobro"
          />
          <Typography variant="h4"> $ 120.300</Typography>
        </Grid>
      </Grid>
        
    </Grid>
  );
}
