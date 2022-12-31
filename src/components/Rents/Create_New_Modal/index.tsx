import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { postNewRent, RentDTO } from "../../../services/rents";
import { getAllVehicle, Vehicle } from "../../../services/vehicle";
import { getAllGarage, Garage } from "../../../services/garages";
import NumberInput from "../../kit/Inputs/Number";
import SelectInput from "../../kit/Inputs/Select";
import BasicModal from "../../kit/Modal";

interface Props {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  openModal: boolean;
  updatePage: () => void;
}

const defaultRentDTO = {
  rentType: "",
  amountForTime: 0,
  vehicle: 0,
  placeGarage: 0,
};

export default function CreateNew_Modal(props: Props) {
  const [RentDTO, setRentDTO] = useState<RentDTO>(defaultRentDTO);
  const [vehicleData, setVehicleData] = useState<Vehicle[]>([]);
  const [garageData, setGarageData] = useState<Garage[]>([]);

  const onCloseModal = () => {
    props.setOpenModal(false);
    setRentDTO(defaultRentDTO);
  };

  const handlePostNewRent = () => {
    (async () => {
      let response = await postNewRent(RentDTO);

      if (response !== undefined) {
        props.updatePage();
        onCloseModal();
      }
    })();
  };
  const handleGetVehicleData = () => {
    (async () => {
      let data = await getAllVehicle();

      if (data !== undefined) {
        setVehicleData(data);
      }
    })();
  };

  const disableRentDTO = () => {
    if (
      RentDTO.rentType === "" ||
      !RentDTO.amountForTime ||
      !RentDTO.vehicle ||
      !RentDTO.placeGarage
    )
      return true;

    return false;
  };
  useEffect(() => {
    disableRentDTO();
  }, [RentDTO]);

  useEffect(handleGetVehicleData, []);
  const handleGetGarageData = () => {
    (async () => {
      let data = await getAllGarage();

      if (data !== undefined) {
        setGarageData(data);
      }
    })();
  };
  useEffect(handleGetGarageData, []);

  return (
    <Grid className="CreateNew_Modal">
      <BasicModal
        disabled={disableRentDTO()}
        saveOnclick={handlePostNewRent}
        closeModal={() => onCloseModal()}
        open={props.openModal}
      >
        <Grid className="CreateNew_Modal_Form">
          <Typography className="form-input-title" variant="h4">
            Crear nueva renta
          </Typography>
          <Grid className="form_input">
            <SelectInput
              label="Tipo de renta"
              onChange={(rentType) =>
                setRentDTO((prevState) => ({
                  ...prevState,
                  rentType: rentType as string,
                }))
              }
              items={[
                {
                  value: "Hourly",
                  label: "Por hora",
                },
                {
                  value: "Daily",
                  label: "Por dia",
                },
                {
                  value: "Weekly",
                  label: "Por semana",
                },
                {
                  value: "Monthly",
                  label: "Por mes",
                },
                {
                  value: "Yearly",
                  label: "Por año",
                },
              ]}
            />
          </Grid>
          <Grid className="form_input">
            <NumberInput
              onChange={(amountForTime) =>
                setRentDTO((prevState) => ({
                  ...prevState,
                  amountForTime,
                }))
              }
              label="Precio por tiempo"
            />
          </Grid>
          <Grid className="form_input">
            <SelectInput
              label="Vehículo"
              onChange={(vehicle) =>
                setRentDTO((prevState) => ({
                  ...prevState,
                  vehicle: vehicle as number,
                }))
              }
              items={vehicleData.map((v) => ({
                value: v.id,
                label: v.licensePlate,
              }))}
            />
          </Grid>
          <Grid className="form_input">
            <SelectInput
              label="Cochera"
              onChange={(placeGarage) =>
                setRentDTO((prevState) => ({
                  ...prevState,
                  placeGarage: placeGarage as number,
                }))
              }
              items={garageData.map((v) => ({
                label: v.placeId,
                value: v.id,
              }))}
            />
          </Grid>
        </Grid>
      </BasicModal>
    </Grid>
  );
}
