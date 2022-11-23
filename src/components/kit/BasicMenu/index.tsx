import { Button, Grid, Typography } from "@mui/material";
import "./BasicMenu.scss";

export default function BasicMenu() {
  return (
    <Grid className="BasicMenu">
      <Grid className="logo">
        <Typography>LOGO</Typography>
      </Grid>
      <Grid>
        <Button className="button-inicio" variant="contained">
          Inicio
        </Button>
      </Grid>
      <Grid>
        <Button className="button-cars" variant="contained">
          Vehiculos
        </Button>
      </Grid>
      <Grid>
        <Button className="button-garages" variant="contained">
          Cocheras
        </Button>
      </Grid>
    </Grid>
  );
}
