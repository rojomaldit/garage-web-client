import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Divider, Grid } from "@mui/material";
import "./Modal.scss";
import ButtonLevel from "../Buttons";

interface Props {
  disabled?: boolean;
  open: boolean;
  closeModal: () => void;
  children?: React.ReactElement;
  saveOnclick?: () => void;
}

export default function BasicModal(props: Props) {
  return (
    <Grid container>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.open}
        onClose={props.closeModal}
        closeAfterTransition
      >
        <Fade in={props.open}>
          <Grid className="basic-modal" container>
            <Box className="box-modal">
              <Grid>{props.children}</Grid>
              {props.saveOnclick && (
                <Grid className="box-modal-footer">
                  <Divider className="divider" />
                  <Grid container className="button-modal">
                    <Grid item xs={6}>
                      <ButtonLevel
                        size="large"
                        onClick={props.closeModal}
                        variant="outlined"
                        title="Cancelar"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <ButtonLevel
                        disabled={props.disabled}
                        size="large"
                        onClick={props.saveOnclick}
                        title="Guardar"
                      />
                    </Grid>
                  </Grid>
                </Grid>
              )}
            </Box>
          </Grid>
        </Fade>
      </Modal>
    </Grid>
  );
}
