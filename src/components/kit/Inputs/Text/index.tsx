import { Grid, TextField } from "@mui/material";
import "./TextInput.scss";

interface Props {
  label: string;
  onChange: (_value: string) => void;
}
export default function TextInput(props: Props) {
  const { label } = props;
  return (
    <Grid>
      <TextField
        className="text-input"
        color="secondary"
        onChange={(event) => props.onChange(event.target.value)} // Ejecuta nuestra funcion onChange que recibe el valor del input
        id="outlined-basic"
        label={label}
        variant="outlined"
      />
    </Grid>
  );
}
