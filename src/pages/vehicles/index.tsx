import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import BasicTable from "../../components/kit/BasicTable";
import MenuTop from "../../components/MenuTop";
import CreateNew_Modal from "../../components/Vehicle/CreateNew_Modal";
import { deleteVehicle, getAllVehicle, Vehicle } from "../../services/vehicle";
import DeleteIcon from "@mui/icons-material/Delete";
import Alerts from "../../components/kit/Alerts";
import ConfirmationModal from "../../components/kit/Modal/Confirmation-modal";

export default function Vehicles() {
  const [vehiclesData, setVehiclesData] = useState<Vehicle[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [vehicleToDeleteModal, setVehicleToDeleteModal] = useState(0);
  const [alertStatus, setAlertStatus] = useState<
    "noProcess" | "success" | "error"
  >("noProcess");

  const [alertStatusConfirmation, setAlertStatusConfirmation] = useState<
    "noProcess" | "success" | "error"
  >("noProcess");

  const handleDeletedVehicle = (id: number) => {
    (async () => {
      const data = await deleteVehicle(id);

      if (data !== undefined) {
        handleVehiclesData();
        setAlertStatusConfirmation("success");
      } else {
        setAlertStatusConfirmation("error");
      }

      setVehicleToDeleteModal(0);
    })();
  };

  const handleVehiclesData = () => {
    (async () => {
      const data = await getAllVehicle();
      if (data !== undefined) setVehiclesData(data);
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
          options={[
            {
              startIcon: <DeleteIcon />,
              label: "eliminar",
              onClick: (rowIndex: number) => {
                const vehicle = vehiclesData[rowIndex];
                setVehicleToDeleteModal(vehicle.id);
              },
            },
          ]}
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
      {alertStatus !== "noProcess" && (
        <Alerts
          setAlertStatus={setAlertStatus}
          severity={alertStatus}
          message={
            alertStatus === "success"
              ? "El vehículo se a creado con exíto"
              : "Ocurrío un error"
          }
        />
      )}
      {alertStatusConfirmation !== "noProcess" && (
        <Alerts
          setAlertStatus={setAlertStatusConfirmation}
          severity={alertStatusConfirmation}
          message={
            alertStatusConfirmation === "success"
              ? "El vehículo se a eliminado con exíto"
              : "Ocurrío un error al eliminar el vehículo"
          }
        />
      )}

      <CreateNew_Modal
        setAlertStatus={setAlertStatus}
        updatePage={handleVehiclesData}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />

      <ConfirmationModal
        confirmationOption={{
          onclick: () => handleDeletedVehicle(vehicleToDeleteModal),
          title: "Eliminar",
          color: "error",
        }}
        title="Eliminar vehículo"
        description="Este vehículo se eliminara permanentemente."
        closeModal={() => setVehicleToDeleteModal(0)}
        open={vehicleToDeleteModal ? true : false}
      />
    </Grid>
  );
}
