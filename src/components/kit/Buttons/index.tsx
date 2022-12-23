import { Grid } from "@mui/material";
import Button from "@mui/material/Button";

interface Props {
  title: string;
  onClick?: () => void;
  variant?: "filled" | "text" | "outlined" | "contained";
  href?: string;
}

export default function ButtonLevel(props: Props) {
  const { variant = "filled", title, onClick, href } = props;
  return (
    <Grid className="button-level">
      {variant === "filled" && (
        <Button
          target="_blank"
          href={!href ? "" : href}
          onClick={onClick}
          color="secondary"
          variant="contained"
        >
          {title}
        </Button>
      )}
      {variant === "text" && (
        <Button
          onClick={onClick}
          href={!href ? "" : href}
          target="_blank"
          size="small"
          color="secondary"
          variant="text"
        >
          {title}
        </Button>
      )}
      {variant == "outlined" && (
        <Button
          onClick={onClick}
          href={!href ? "" : href}
          size="small"
          color="secondary"
          variant="outlined"
        >
          {title}
        </Button>
      )}
      {variant == "contained" && (
        <Button
          onClick={onClick}
          href={!href ? "" : href}
          target="_blank"
          size="small"
          color="secondary"
          variant="contained"
        >
          {title}
        </Button>
      )}
    </Grid>
  );
}
