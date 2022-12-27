

import { Grid, Typography } from "@mui/material";
import BasicModal from "../../kit/Modal";

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
        <Typography textAlign={"center"} variant="h5">
          Cochera
        </Typography>
      </BasicModal>
    </Grid>
  );
}