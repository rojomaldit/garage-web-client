import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import CreateNew_Modal from "../../components/Garage/CreateNew_Modal";
import BasicTable from "../../components/kit/BasicTable";
import MenuTop from "../../components/MenuTop";
import { deleteGarage, Garage, getAllGarage } from "../../services/garages";
import DeleteIcon from "@mui/icons-material/Delete";
import "./Garages.scss";

export default function Garages() {
  const [garageData, setGarageData] = useState<Garage[]>([]);
  const [openModal, setOpenModal] = useState(false);

  const handleGarageData = () => {
    (async () => {
      const data = await getAllGarage();
      setGarageData(data);
    })();
  };
  useEffect(handleGarageData, []);

  const handleDeletedGarage = (id: number) => {
    (async () => {
      const data = await deleteGarage(id);

      if (data !== undefined) handleGarageData();
    })();
  };

  return (
    <Grid className="garage">
      <Grid className="button-garage">
        <MenuTop
          button={{
            title: "Crear Nuevo",
            onClick: () => setOpenModal(true),
          }}
          title="Cocheras"
        />
      </Grid>
      <Grid>
        <BasicTable
          options={[
            {
              startIcon: <DeleteIcon />,
              label: "eliminar",
              onClick: (rowIndex: number) => {
                const vehicle = garageData[rowIndex];

                handleDeletedGarage(vehicle.id);
              },
            },
          ]}
          columns={["Lugar", "Creación", "Estado"]}
          rows={garageData.map((garage) => {
            return [
              garage.placeId,
              garage.createdDate.split("T")[0],
              garage.isAvailable ? "Disponible" : "Ocupado",
            ];
          })}
        />
      </Grid>
      <CreateNew_Modal
        updatePage={handleGarageData}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </Grid>
  );
}
