import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
<<<<<<< HEAD
=======
import CreateNew_Modal from "../../components/Garage/CreateNew_Modal";
>>>>>>> cd325c814fd7b649474d25c3b2339cf05cf0988d
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
<<<<<<< HEAD
            onClick: () => console.log(),
=======
            onClick: () => setOpenModal(true),
>>>>>>> cd325c814fd7b649474d25c3b2339cf05cf0988d
          }}
          title="Cocheras"
        ></MenuTop>
      </Grid>
      <Grid>
        <BasicTable
<<<<<<< HEAD
          columns={["Lugar", "Fecha de inicio", "Estado"]}
=======
          columns={["Lugar", "Creación", "Estado"]}
>>>>>>> cd325c814fd7b649474d25c3b2339cf05cf0988d
          rows={garageData.map((garage) => {
            return [
              garage.placeId,
              garage.createdDate.split("T")[0],
              garage.isAvailable ? "Disponible" : "Ocupado",
            ];
          })}
        />
      </Grid>
      <CreateNew_Modal openModal={openModal} setOpenModal={setOpenModal} />
    </Grid>
  );
}
