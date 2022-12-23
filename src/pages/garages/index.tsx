import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import BasicTable from "../../components/kit/BasicTable";
import MenuTop from "../../components/MenuTop";
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
    <Grid className="garage">
      <Grid className="button-garage">
        <MenuTop title="Cocheras"></MenuTop>
      </Grid>
      <Grid>
        
      </Grid>
      <Grid>
        <BasicTable
          columns={["lugar", "Creacion", "estado"]}
          rows={garageData.map((garage) => {
            return [
              garage.placeId,
              garage.createdAt.split("T")[0],
              garage.isAvailable ? "Disponible" : "Ocupado",
            ];
          })}
        />
      </Grid>
    </Grid>
  );
}
