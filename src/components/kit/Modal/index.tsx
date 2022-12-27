import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";

interface Props {

    open: boolean;
    closeModal: () => void;
    children?: React.ReactElement;

}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};


export default function BasicModal(props: Props) {
  
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.open}
        onClose={props.closeModal}
        closeAfterTransition
      >
        <Fade in={props.open}>
          <Box sx={style}>
            {props.children}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
