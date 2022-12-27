import { Grid, Typography } from "@mui/material";
import SelectLabels from "../../kit/Inputs/Select";
import TextInput from "../../kit/Inputs/Text";
import BasicModal from "../../kit/Modal";
import "./CreateNewModal.scss";

interface Props {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  openModal: boolean;
}

export default function CreateNew_Modal(props: Props) {
  return (
    <Grid className="CreateNew_Modal">
      <BasicModal
        closeModal={() => props.setOpenModal(false)}
        open={props.openModal}
      >
        <Grid className="CreateNew_Modal_Form">
          <Grid className="form_input">
            <TextInput onChange={() => {}} label="Patente" />
          </Grid>
          <Grid className="form_input">
         <SelectLabels title="Vehículo" />
          </Grid>
          <Grid className="form_input">
            <TextInput onChange={() => {}} label="Teléfono" />
          </Grid>
          <Grid className="form_input">
            <TextInput onChange={() => {}} label="Nota" />
          </Grid>
        </Grid>
      </BasicModal>
    </Grid>
  );
}
