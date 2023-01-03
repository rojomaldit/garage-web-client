import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import CreateNew_Modal from "../../components/Garage/CreateNew_Modal";
import BasicTable from "../../components/kit/BasicTable";
import MenuTop from "../../components/MenuTop";
import { deleteGarage, Garage, getAllGarage } from "../../services/garages";
import DeleteIcon from "@mui/icons-material/Delete";
import "./Garages.scss";
import ConfirmationModal from "../../components/kit/Modal/Confirmation-modal";
import Alerts from "../../components/kit/Alerts";

export default function Garages() {
  const [garageData, setGarageData] = useState<Garage[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [garageToDeleteModal, setGarageToDeleteModal] = useState(0);
  const [alertStatus, setAlertStatus] = useState<
    "noProcess" | "success" | "error"
  >("noProcess");

  const [alertStatusConfirmation, setAlertStatusConfirmation] = useState<
    "noProcess" | "success" | "error"
  >("noProcess");

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
      if (data !== undefined) {
        handleGarageData();
        setAlertStatusConfirmation("success");
      } else {
        setAlertStatusConfirmation("error");
      }
      setGarageToDeleteModal(0);
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
                setGarageToDeleteModal(vehicle.id);
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
        setAlertStatus={setAlertStatus}
      />

      <ConfirmationModal
        description="asdasdasd"
        title="Eliminar"
        closeModal={() => setGarageToDeleteModal(0)}
        open={garageToDeleteModal ? true : false}
        confirmationOption={{
          onclick: () => handleDeletedGarage(garageToDeleteModal),

          title: "Eliminar",
          color: "error",
        }}
      />
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
              ? "La cochera se a eliminado con exíto"
              : "Ocurrío un error al eliminar la cochera"
          }
        />
      )}
    </Grid>
  );
}
