import { Grid, TextField } from "@mui/material";
import "./Password.scss";

interface Props {
  label: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}
export default function InputPassword(props: Props) {
  const { label } = props;
  return (
    <Grid className="password">
      <TextField
        onChange={(event) => props.onChange(event.target.value)}
        id="outlined-password-input"
        label={label}
        type="password"
      />
    </Grid>
  );
}
