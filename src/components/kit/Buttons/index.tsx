import { Grid } from "@mui/material";
import Button from "@mui/material/Button";

interface Props {
  title: string;
  onClick?: () => void;
  variant?: "filled" | "text" | "outlined";
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
          href={!href ? "" : href}
          target="_blank"
          size="small"
          color="secondary"
          variant="text"
        >
          {title}
        </Button>
      )}
    </Grid>
  );
}
