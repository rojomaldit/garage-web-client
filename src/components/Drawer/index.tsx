import { Grid, Typography } from "@mui/material";
import "./Drawer.scss";

interface Props {
    title: string,
}
export default function Drawer(props:Props) {
    const {title} = props;
  return (
    <Grid className="drawer">
      <Typography variant="h4">{title}</Typography>
    </Grid>
  );
}
