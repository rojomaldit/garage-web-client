import { Button, Grid } from "@mui/material";
interface Props {
  title: string;
}
export default function ButtonText(props: Props) {
  const { title } = props;
  return (
    <Grid>
      <Button size="small" color="secondary" variant="text">
        {title}
      </Button>
    </Grid>
  );
}
