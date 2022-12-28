import { Grid, Typography } from "@mui/material";
import { useState } from "react";
import { VehicleDTO, postNewVehicle } from "../../../services/vehicle";
import SelectInput from "../../kit/Inputs/Select";
import TextInput from "../../kit/Inputs/Text";
import BasicModal from "../../kit/Modal";
import "./CreateNewModal.scss";

interface Props {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  openModal: boolean;
  updatePage: () => void;
}

const defaultVehicleDTO = {
  licensePlate: "",
  vehicleType: "",
  phoneNumber: "",
  notes: "",
};

export default function CreateNew_Modal(props: Props) {
  const [vehicleDTO, setVehicleDTO] = useState<VehicleDTO>(defaultVehicleDTO);

  const handlePostNewVehicle = () => {
    (async () => {
        let response = await postNewVehicle(vehicleDTO);

        if(response !== undefined) {
          props.updatePage()
          props.setOpenModal(false)
        } 
    })();
  };

  return (
    <Grid className="CreateNew_Modal">
      <BasicModal
        saveOnclick={handlePostNewVehicle}
        closeModal={() => props.setOpenModal(false)}
        open={props.openModal}
      >
        <Grid className="CreateNew_Modal_Form">
          <Typography className="form-input-title" variant="h4">
            Crear nuevo vehículo
          </Typography>
          <Grid className="form_input">
            <TextInput
              onChange={(licensePlate) =>
                setVehicleDTO((prevState) => ({
                  ...prevState,
                  licensePlate,
                }))
              }
              label="Patente"
            />
          </Grid>
          <Grid className="form_input">
            <SelectInput
              onChange={(vehicleType) =>
                setVehicleDTO((prevState) => ({
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
              onChange={(phoneNumber) =>
                setVehicleDTO((prevState) => ({
                  ...prevState,
                  phoneNumber,
                }))
              }
              label="Teléfono"
            />
          </Grid>
          <Grid className="form_input">
            <TextInput
              onChange={(notes) =>
                setVehicleDTO((prevState) => ({
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
