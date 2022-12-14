import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface Props {
  itemSelected?: string;
  onChange: (_value: string | number) => void;
  label?: string;
  items: {
    value: string | number;
    label: string;
  }[];
}

export default function SelectInput(props: Props) {
  const handleChange = (event: SelectChangeEvent) => {
    props.onChange(event.target.value);
  };

  return (
    <div>
      <FormControl color="secondary" sx={{ minWidth: "100%" }}>
        <InputLabel id="demo-simple-select-helper-label">
          {props.label}
        </InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={props.itemSelected}
          label="Age"
          onChange={handleChange}
        >
          {props.items.map((item) => (
            <MenuItem value={item.value}>{item.label}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
