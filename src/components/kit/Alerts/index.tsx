import { Alert, AlertColor, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import "./Alert.scss";

interface Props {
  setAlertStatus: React.Dispatch<React.SetStateAction<"success" | "error" | "noProcess">>  
  severity: AlertColor;
  message: string;
}

export default function Alerts(props: Props) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeId = setTimeout(() => {
      setShow(false);
      props.setAlertStatus("noProcess")
    }, 4000);

    return () => {
      clearTimeout(timeId);
    };
  }, []);

  return (
    <Grid className="alert-style">
      {show && (
        <Alert variant="filled" className="alert" severity={props.severity}>
          {props.message}
        </Alert>
      )}
    </Grid>
  );
}
