import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import BasicTable from "../../components/kit/BasicTable";
import { Garage, getAllGarage } from "../../services/garages";
import "./Garages.scss";

export default function Garages() {
  const [garageData, setGarageData] = useState<Garage[]>([]);
  const handleVehiclesData = () => {
    (async () => {
      const data = await getAllGarage();
      setGarageData(data);
    })();
  };
  useEffect(handleVehiclesData, []);

  return (
    <Grid>
      <Grid>
        <Typography variant="h3">Garages</Typography>
      </Grid>
      <Grid>
        <BasicTable
          columns={["lugar", "Creacion", "estado"]}
          rows={garageData.map((garage) => {
            return [
              garage.placeId,
              garage.createdAt,
              garage.isAvailable ? "Disponible" : "Ocupado",
            ];
          })}
        />
      </Grid>
    </Grid>
  );
}
