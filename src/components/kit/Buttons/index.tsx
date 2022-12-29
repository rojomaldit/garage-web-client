import { Grid } from "@mui/material";
import Button from "@mui/material/Button";

interface Props {
  title: string;
  onClick?: () => void;
  variant?: "text" | "outlined" | "contained";
  href?: string;
  size?: "small" | "medium" | "large";
}

export default function ButtonLevel(props: Props) {
  const { variant = "contained", title, onClick, href, size = "medium" } = props;
  return (
    <Grid className="button-level">
      {variant === "text" && (
        <Button
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
