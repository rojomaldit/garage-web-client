import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ButtonText from "../../components/kit/Buttons/ButtonText";
import {
  getAllPlaceGarage,
  getTotalToCollect,
  PlaceGarage,
  TotalToCollect,
} from "../../services/dashboard";
import "./Dashboard.scss";
import DashboardGraphic from "./Graphic";

export default function Dashboard() {
  const [placeGarageData, setPlaceGarageData] = useState<PlaceGarage[]>([]);
  const handlePlaceGarage = () => {
    (async () => {
      const data = await getAllPlaceGarage();
      setPlaceGarageData(data);
    })();
  };
  console.log(placeGarageData);
  

  const [totalToCollectData, setTotalToCollectData] =
    useState<TotalToCollect>();
  const handleTotalCollect = () => {
    (async () => {
      const data = await getTotalToCollect();
      setTotalToCollectData(data);
    })();
  };

  useEffect(() => {
    handlePlaceGarage()
    handleTotalCollect()
  }, []);

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
          <Typography>
            {placeGarageData.filter((e) => e.isAvailable).length}
          </Typography>
        </Grid>
        <Grid className="occupied-garages" item xs={8}>
          <Typography color="secondary">COCHERAS OCUPADAS</Typography>
          <Grid>
            <Typography>
              {placeGarageData.filter((e) => !e.isAvailable).length}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container className="pending-collection">
        <Grid item xs={4}>
          <ButtonText subtitle="/vehicle" title="Pendiente de Cobro" />
          <Typography variant="h4">
            {Math.floor(!totalToCollectData ? 0 : totalToCollectData.totalToCollect)}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
