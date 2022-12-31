import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
interface Props {
  disabled?: boolean;
  title: string;
  onClick?: () => void;
  variant?: "text" | "outlined" | "contained";
  href?: string;
  size?: "small" | "medium" | "large";
  icon?: React.ReactElement;
}

export default function ButtonLevel(props: Props) {
  const {
    variant = "contained",
    title,
    onClick,
    href,
    size = "medium",
  } = props;
  return (
    <Grid className="button-level">
      {variant === "text" && (
        <Button
          startIcon={props.icon}
          disabled={props.disabled}
          onClick={onClick}
          href={!href ? "" : href}
          target="_blank"
          size={size}
          color="secondary"
          variant="text"
        >
          {title}
        </Button>
      )}
      {variant === "outlined" && (
        <Button
          startIcon={props.icon}
          disabled={props.disabled}
          onClick={onClick}
          href={!href ? "" : href}
          size={size}
          color="secondary"
          variant="outlined"
        >
          {title}
        </Button>
      )}
      {variant === "contained" && (
        <Button
          startIcon={props.icon}
          disabled={props.disabled}
          onClick={onClick}
          href={!href ? "" : href}
          target="_blank"
          size="large"
          color="secondary"
          variant="contained"
        >
          {title}
        </Button>
      )}
    </Grid>
  );
}
