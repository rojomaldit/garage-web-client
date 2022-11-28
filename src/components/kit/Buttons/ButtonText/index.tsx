import { Button, Grid } from "@mui/material";
interface Props {
  title: string;
  subtitle: string;
}
export default function ButtonText(props: Props) {
  const { title, subtitle } = props;
  return (
    <Grid>
      <Button href={subtitle} target="_blank" size="small" color="secondary" variant="text">
        {title}
      </Button>
    </Grid>
  );
}
