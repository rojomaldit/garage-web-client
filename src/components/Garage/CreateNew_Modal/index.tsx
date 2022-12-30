import { Grid, Typography } from "@mui/material";
import BasicModal from "../../kit/Modal";
import TextInput from "../../kit/Inputs/Text";
import "./ModalGarage.scss";
import { useState } from "react";
import { GarageDTO, postNewGarage } from "../../../services/garages";

interface Props {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  openModal: boolean;
  updatePage: () => void;
}

const defaultGarageDTO = {
  placeId: "",
};

export default function CreateNew_Modal(props: Props) {
  const [garageDTO, setGarageDTO] = useState<GarageDTO>(defaultGarageDTO);
  const handlePostNewGarage = () => {
    (async () => {
      let response = await postNewGarage(garageDTO);

      if (response !== undefined) {
        props.updatePage();
        props.setOpenModal(false);
      }
    })();
  };
  return (
    <Grid className="CreateNew_Modal">
      <BasicModal
        saveOnclick={handlePostNewGarage}
        closeModal={() => props.setOpenModal(false)}
        open={props.openModal}
      >
        <Grid className="modal-title">
          <Typography textAlign={"center"} variant="h4">
            Cocheras
          </Typography>
          <Grid>
            <TextInput
              onChange={(placeId) =>
                setGarageDTO((prevState) => ({
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
