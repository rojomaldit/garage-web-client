import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Divider, Grid, Typography } from "@mui/material";
import ButtonLevel from "../../Buttons";
import "./ConfirmationModal.scss";
interface Props {
  open: boolean;
  closeModal: () => void;
  title: string;
  description: string;

  confirmationOption: {
    onclick: () => void;
    title: string;
    color?:
      | "success"
      | "error"
      | "info"
      | "warning"
      | "inherit"
      | "primary"
      | "secondary";
  };
}

export default function ConfirmationModal(props: Props) {
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
          <Grid className="confirmation-modal" container>
            <Box className="box-modal">
              <Grid>
                <Typography
                  color={"secondary"}
                  textAlign={"center"}
                  variant="h5"
                >
                  {props.title}
                </Typography>
              </Grid>
              <Grid className="description">
                <Typography variant="body2">{props.description}</Typography>
                <Typography variant="body2">
                  ¿Está seguro que desea continuar?
                </Typography>
              </Grid>

              <Grid className="box-modal-footer">
                <Divider className="divider" />
                <Grid container className="button-modal">
                  <Grid item xs={6}>
                    <ButtonLevel
                      size="small"
                      onClick={props.closeModal}
                      variant="outlined"
                      title="Cancelar"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <ButtonLevel
                      color={props.confirmationOption.color}
                      size="small"
                      onClick={props.confirmationOption.onclick}
                      title={props.confirmationOption.title}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Fade>
      </Modal>
    </Grid>
  );
}
