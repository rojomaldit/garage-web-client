import { Grid, Typography } from "@mui/material";
import BasicModal from "../../kit/Modal";
import TextInput from "../../kit/Inputs/Text";
import "./ModalGarage.scss";

interface Props {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  openModal: boolean;
}

export default function CreateNew_Modal(props: Props) {
  return (
    <Grid className="CreateNew_Modal">
      <BasicModal
        saveOnclick={() =>
          console.log("aca va la funcion para mandar al back info")
        }
        closeModal={() => props.setOpenModal(false)}
        open={props.openModal}
      >
        <Grid className="modal-title">
          <Typography textAlign={"center"} variant="h4">
            Cocheras
          </Typography>
          <Grid>
            <TextInput onChange={() => console.log("asd")} label="Lugar" />
          </Grid>
        </Grid>
      </BasicModal>
    </Grid>
  );
}
