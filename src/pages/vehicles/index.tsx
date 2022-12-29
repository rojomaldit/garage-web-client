import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import BasicTable from "../../components/kit/BasicTable";
import MenuTop from "../../components/MenuTop";
import CreateNew_Modal from "../../components/Vehicle/CreateNew_Modal";
import { getAllVehicle, Vehicle } from "../../services/vehicle";

export default function Vehicles() {
  const [vehiclesData, setVehiclesData] = useState<Vehicle[]>([]);
  const [openModal, setOpenModal] = useState(false);

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
        <MenuTop
          button={{
            onClick: () => setOpenModal(true),
            title: "Crear Nuevo",
          }}
          title="vehículo"
        />
      </Grid>
      <Grid>
        <BasicTable
          columns={["Patente", "Tipo de vehiculo", "Teléfono", "Notas"]}
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
      <CreateNew_Modal
        updatePage={handleVehiclesData}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </Grid>
  );
}
