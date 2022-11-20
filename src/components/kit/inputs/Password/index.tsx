import { Grid, TextField } from "@mui/material";
import "./Password.scss";

interface Props {
    label: string;
  }
export default function InputPassword(props: Props) {
    const { label } = props;
  return (
    <Grid className="password">
      <TextField id="outlined-password-input" label={label} type="password" />
    </Grid>
  );
}
