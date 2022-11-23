import { Grid, Typography } from "@mui/material";
import BasicMenu from "../../components/kit/BasicMenu";
import "./Dashboard.scss";
export default function Dashboard() {
  return (
    <Grid className="menu" container>
      <Grid item xs={2}>
        <BasicMenu />
      </Grid>
      <Grid className="begin">
        <Grid item xs={10}>
          <Typography variant="h3">Inicio</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
