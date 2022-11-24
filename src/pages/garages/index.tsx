import { Grid, Typography } from "@mui/material";
import BasicMenu from "../../components/kit/BasicMenu";
import "./Garages.scss";

export default function Garages() {
  return (
    <Grid container>
      <Grid item xs={2}>
        <BasicMenu></BasicMenu>
      </Grid>
      <Grid item xs={10}>
        <Typography variant="h3">Garages</Typography>
      </Grid>
    </Grid>
  );
}
