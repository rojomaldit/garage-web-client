import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";

interface Props {
  color?:
    | "success"
    | "error"
    | "info"
    | "warning"
    | "inherit"
    | "primary"
    | "secondary";
  disabled?: boolean;
  title: string;
  onClick?: () => void;
  variant?: "text" | "outlined" | "contained";
  href?: string;
  size?: "small" | "medium" | "large";
  startIcon?: React.ReactElement;
}

export default function ButtonLevel(props: Props) {
  const {
    variant = "contained",
    title,
    onClick,
    href,
    size = "medium",
    color = "secondary",
  } = props;
  return (
    <Grid className="button-level">
      {variant === "text" && (
        <Button
          startIcon={props.startIcon}
          disabled={props.disabled}
          onClick={onClick}
          href={!href ? "" : href}
          target="_blank"
          size={size}
          color={color}
          variant="text"
        >
          {title}
        </Button>
      )}
      {variant === "outlined" && (
        <Button
          startIcon={props.startIcon}
          disabled={props.disabled}
          onClick={onClick}
          href={!href ? "" : href}
          size={size}
          color={color}
          variant="outlined"
        >
          {title}
        </Button>
      )}
      {variant === "contained" && (
        <Button
          startIcon={props.startIcon}
          disabled={props.disabled}
          onClick={onClick}
          href={!href ? "" : href}
          target="_blank"
          size={size}
          color={color}
          variant="contained"
        >
          {title}
        </Button>
      )}
    </Grid>
  );
}
