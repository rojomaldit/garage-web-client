import { Grid, Typography } from "@mui/material";
import { useState } from "react";
import {
  UpdateVehicleDTO,
  updateVehicle,
  Vehicle,
} from "../../../services/vehicle";
import SelectInput from "../../kit/Inputs/Select";
import TextInput from "../../kit/Inputs/Text";
import BasicModal from "../../kit/Modal";
import "./UpdateVehicleModal.scss";

interface Props {
  vehicle: Vehicle;
  title: string;
  setAlertStatus: React.Dispatch<
    React.SetStateAction<"noProcess" | "success" | "error">
  >;
  setOpenModal: React.Dispatch<React.SetStateAction<Vehicle | null>>;
  openModal: boolean;
  updatePage: () => void;
}

export default function UpdateVehicleModal(props: Props) {
  const [updateVehicleDTO, setUpdateVehicleDTO] = useState<UpdateVehicleDTO>({
    vehicleId: props.vehicle?.id,
    name: null,
    email: null,
    licensePlate: props.vehicle?.licensePlate,
    vehicleType: props.vehicle?.vehicleType,
    phoneNumber: props.vehicle?.phoneNumber,
    deleteAfterRent: null,
    address: null,
    notes: props.vehicle?.notes,
  });

  const handleUpdateVehicle = () => {
    (async () => {
      let response = await updateVehicle(updateVehicleDTO);

      if (response !== undefined) {
        props.updatePage();
        onCloseModal();
        props.setAlertStatus("success");
      } else {
        props.setAlertStatus("error");
      }
    })();
  };

  const disableVehicleDTO = () => {
    if (
      updateVehicleDTO.licensePlate === "" ||
      updateVehicleDTO.vehicleType === ""
    )
      return true;

    return false;
  };
  const onCloseModal = () => {
    props.setOpenModal(null);
  };

  return (
    <Grid className="UpdateVehicleModal">
      <BasicModal
        disabled={disableVehicleDTO()}
        saveOnclick={handleUpdateVehicle}
        closeModal={onCloseModal}
        open={props.openModal}
      >
        <Grid className="UpdateVehicleModal_Form">
          <Typography className="form-input-title" variant="h4">
            {props.title}
          </Typography>
          <Grid className="form_input">
            <TextInput
              value={updateVehicleDTO.licensePlate as string}
              onChange={(licensePlate) =>
                setUpdateVehicleDTO((prevState) => ({
                  ...prevState,
                  licensePlate,
                }))
              }
              label="Patente"
            />
          </Grid>
          <Grid className="form_input">
            <SelectInput
              itemSelected={updateVehicleDTO.vehicleType as string}
              onChange={(vehicleType) =>
                setUpdateVehicleDTO((prevState) => ({
                  ...prevState,
                  vehicleType: vehicleType as string,
                }))
              }
              items={[
                {
                  value: "Car",
                  label: "Auto",
                },
                {
                  value: "Van",
                  label: "Camioneta",
                },
                {
                  value: "Motorcycle",
                  label: "Motocicleta",
                },
                {
                  value: "Bike",
                  label: "Bicicleta ",
                },
                {
                  value: "Truck",
                  label: "Camión ",
                },
              ]}
              label="Vehículo"
            />
          </Grid>
          <Grid className="form_input">
            <TextInput
              value={updateVehicleDTO.phoneNumber as string}
              onChange={(phoneNumber) =>
                setUpdateVehicleDTO((prevState) => ({
                  ...prevState,
                  phoneNumber,
                }))
              }
              label="Teléfono"
            />
          </Grid>
          <Grid className="form_input">
            <TextInput
              value={updateVehicleDTO.notes as string}
              onChange={(notes) =>
                setUpdateVehicleDTO((prevState) => ({
                  ...prevState,
                  notes,
                }))
              }
              label="Nota"
            />
          </Grid>
        </Grid>
      </BasicModal>
    </Grid>
  );
}
