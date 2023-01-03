import { Grid, TextField } from "@mui/material";
import "./Number.scss";

interface Props {
  label: string;
  onChange: (_value: number) => void;
}

export default function NumberInput(props: Props) {
  return (
    <Grid>
      <TextField
      color="secondary"
        className="input-number"
        id="standard-number"
        label={props.label}
        onChange={(event) => props.onChange(parseInt(event.target.value))}
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      />
    </Grid>
  );
}
