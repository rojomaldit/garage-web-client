import { Grid, Typography } from "@mui/material";
import { useState } from "react";
import {
  Garage,
  updateGarage,
  UpdateGarageDTO,
} from "../../../services/garages";
import {} from "../../../services/vehicle";
import TextInput from "../../kit/Inputs/Text";
import BasicModal from "../../kit/Modal";

interface Props {
  garage: Garage;
  title: string;
  setAlertStatus: React.Dispatch<
    React.SetStateAction<"noProcess" | "success" | "error">
  >;
  setOpenModal: React.Dispatch<React.SetStateAction<Garage | null>>;
  openModal: boolean;
  updatePage: () => void;
}

export default function UpdateGarageModal(props: Props) {
  const [updateGarageDTO, setUpdateGarageDTO] = useState<UpdateGarageDTO>({
    garageId: props.garage?.id,
    placeId: props.garage?.placeId,
  });

  const handleUpdateGarage = () => {
    (async () => {
      let response = await updateGarage(updateGarageDTO);

      if (response !== undefined) {
        props.updatePage();
        onCloseModal();
        props.setAlertStatus("success");
      } else {
        props.setAlertStatus("error");
      }
    })();
  };

  const disableGarageDTO = () => {
    if (updateGarageDTO.placeId === "") return true;

    return false;
  };
  const onCloseModal = () => {
    props.setOpenModal(null);
  };

  return (
    <Grid className="UpdateVehicleModal">
      <BasicModal
        disabled={disableGarageDTO()}
        saveOnclick={handleUpdateGarage}
        closeModal={onCloseModal}
        open={props.openModal}
      >
        <Grid className="UpdateVehicleModal_Form">
          <Typography className="form-input-title" variant="h4">
            {props.title}
          </Typography>
          <Grid className="form_input">
            <TextInput
              value={updateGarageDTO.placeId as string}

              onChange={(placeId) =>
                setUpdateGarageDTO((prevState) => ({
                  ...prevState,
                  placeId,
                }))
              }
              label="Numero de cochera"
            />
          </Grid>
        </Grid>
      </BasicModal>
    </Grid>
  );
}
