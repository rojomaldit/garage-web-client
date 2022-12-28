import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface Props {
  onChange:  (_value: string | number) => void ;
  label: string;
  items: {
    value: string | number;
    label: string;
  }[];
}


export default function SelectInput(props: Props) {
  const [age, setAge] = React.useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
    props.onChange(event.target.value)
  };

  return (
    <div>
      <FormControl color="secondary" sx={{ m: 1, minWidth: 235 }}>
        <InputLabel id="demo-simple-select-helper-label">
          {props.label}
        </InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          {props.items.map(item => (
            <MenuItem value={item.value}>{item.label}</MenuItem>
          ))}
        </Select>

      </FormControl>
    </div>
  );
}
