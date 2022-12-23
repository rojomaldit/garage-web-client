import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import {
  getAllPlaceGarage,
  getTotalToCollect,
  PlaceGarage,
  TotalToCollect,
} from "../../services/dashboard";
import "./Dashboard.scss";
import DashboardGraphic from "../../components/Dashboard/Graphic";
import ButtonLevel from "../../components/kit/Buttons";

export default function Dashboard() {
  const [placeGarageData, setPlaceGarageData] = useState<PlaceGarage[]>([]);
  const handlePlaceGarage = () => {
    (async () => {
      const data = await getAllPlaceGarage();
      setPlaceGarageData(data);
    })();
  };

  const [totalToCollectData, setTotalToCollectData] =
    useState<TotalToCollect>();
  const handleTotalCollect = () => {
    (async () => {
      const data = await getTotalToCollect();
      setTotalToCollectData(data);
    })();
  };

  useEffect(() => {
    handlePlaceGarage();
    handleTotalCollect();
  }, []);

  return (
    <Grid className="dashboard" container>
      <Grid className="dashboard-title" item xs={12}>
        <Typography variant="h3">Inicio</Typography>
      </Grid>
      <Grid className="graphic">
        <DashboardGraphic />
      </Grid>
      <Grid className="data-garage" container>
        <Grid item xs={4}>
          <ButtonLevel
            variant="text"
            href="/garages"
            title="Cocheras Disponibles"
          />
          <Typography>
            {placeGarageData.filter((e) => e.isAvailable).length}
          </Typography>
        </Grid>
        <Grid className="occupied-garages" item xs={8}>
          <ButtonLevel
            variant="text"
            href="/garages"
            title="Cocheras Ocupadas"
          />
          <Grid>
            <Typography>
              {placeGarageData.filter((e) => !e.isAvailable).length}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container className="pending-collection">
        <Grid item xs={4}>
          <ButtonLevel
            variant="text"
            href="/vehicle"
            title="Pendiente de Cobro"
          />
          <Typography color={"green"} variant="h4">
            💲
            {Math.floor(
              !totalToCollectData ? 0 : totalToCollectData.totalToCollect
            )}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
