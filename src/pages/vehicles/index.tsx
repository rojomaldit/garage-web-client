import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import BasicTable from "../../components/kit/BasicTable";
import { getAllVehicle, Vehicle } from "../../services/vehicle";

export default function Vehicles() {
  const [vehiclesData, setVehiclesData] = useState<Vehicle[]>([]);
  const handleVehiclesData = () => {
    (async () => {
      const data = await getAllVehicle();
      setVehiclesData(data);
    })();
  };
  useEffect(handleVehiclesData, []);

  return (
    <Grid>
      <Grid>
        <Typography variant="h1">vehicles</Typography>
      </Grid>
      <Grid>
        <BasicTable
          columns={["Patente", "Tipo de vehiculo", "Telefono", "Notas"]}
          rows={vehiclesData.map((vehicle) => {
            return [
              vehicle.licensePlate,
              vehicle.vehicleType,
              vehicle.phoneNumber,
              vehicle.notes,
            ];
          })}
        />
      </Grid>
    </Grid>
  );
}
