import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

interface Props {
  title: string;
  onClick: () => void;
}
export default function ButtonMenu(props: Props) {
  const { title } = props;
  return (
    <Stack spacing={2} direction="row">
      <Button onClick={props.onClick} color="secondary" variant="contained">
        {title}
      </Button>
    </Stack>
  );
}
