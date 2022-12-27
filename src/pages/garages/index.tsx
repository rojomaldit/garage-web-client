import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import CreateNew_Modal from "../../components/Garage/CreateNew_Modal";
import BasicTable from "../../components/kit/BasicTable";
import MenuTop from "../../components/MenuTop";
import { Garage, getAllGarage } from "../../services/garages";
import "./Garages.scss";

export default function Garages() {
  const [garageData, setGarageData] = useState<Garage[]>([]);
  const [openModal, setOpenModal] = useState(false);

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
        <MenuTop
          button={{
            title: "Crear Nuevo",
            onClick: () => setOpenModal(true),
          }}
          title="Cocheras"
        ></MenuTop>
      </Grid>
      <Grid>
        <BasicTable
          columns={["Lugar", "Creación", "Estado"]}
          rows={garageData.map((garage) => {
            return [
              garage.placeId,
              garage.createdAt.split("T")[0],
              garage.isAvailable ? "Disponible" : "Ocupado",
            ];
          })}
        />
      </Grid>
      <CreateNew_Modal openModal={openModal} setOpenModal={setOpenModal} />
    </Grid>
  );
}
