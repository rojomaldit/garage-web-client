import { Grid } from "@mui/material";
import { RentHistory } from "../../../services/dashboard";
import CanvasJSReact from "./canvasjs.react";
import "./DashboardGraphic.scss";

interface Props {
  historyData: RentHistory;
}
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
export default function DashboardGraphic(props: Props) {
  const options = {
    animationEnabled: true,
    title: {
      text: "GRAFICO ULTIMOS COBROS",
    },
    axisY: {
      title: "Precio por hora",
      suffix: "$",
    },
    data: [
      {
        color: "#a543e1 ",
        type: "splineArea",
        xValueFormatString: "$",
        yValueFormatString: "#,##0.##",
        showInLegend: true,
        legendText: "Hora del dia",
        dataPoints: props.historyData.history.map((e) => ({
          x: e.collectedOn,
          y: e.amountCollected,
        })),
      },
    ],
  };

  return (
    <Grid className="Dashboard-Graphic" container>
      <CanvasJSChart
        containerProps={{ height: "100", width: "100%" }}
        options={options}
        /* onRef={ref => this.chart = ref} */
      />
    </Grid>
  );
}
