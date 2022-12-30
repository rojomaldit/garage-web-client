import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import BasicTable from "../../components/kit/BasicTable";
import MenuTop from "../../components/MenuTop";
import { getAllRents, Rent } from "../../services/rents";
import { rentTypeToES } from "../../services/rents";

export default function Rents() {
  const [rentsData, setRentsData] = useState<Rent[]>([]);
  const handleRentsData = () => {
    (async () => {
      const data = await getAllRents();
      if (data !== undefined) setRentsData(data);
    })();
  };
  useEffect(handleRentsData, []);


  return (
    <Grid className="rents">
      <Grid>
        <MenuTop
          title="Rentas"
          button={{
            title: "Crear Nuevo",
            onClick: () => console.log("deberia abrir el modal"),
          }}
        />
      </Grid>
      <Grid>
        <BasicTable
          columns={[
            "Fecha de inicio",
            "Tipo de renta",
            "Precio",
            "Ultima fecha de cobro",
          ]}
          rows={rentsData.map((rent) => [
            rent.startDate.split("T")[0],
            rentTypeToES(rent.rentType),
            rent.amountForTime.toString(),
            rent.lastDateCollected.split("T")[0],
          ])}
        />
      </Grid>
    </Grid>
  );
}
