import { Grid } from "@mui/material";
import { RentHistory } from "../../../services/dashboard";
import CanvasJSReact from "./canvasjs.react";
import "./DashboardGraphic.scss";

interface Props {
  historyData: RentHistory;
}
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
export default function DashboardGraphic(props: Props) {

  // Esta funcion se encarga de agrupar todas las horas en un solo objeto
  // si hay 10 elementos a las 12 horas, entonces sumo los 10 elementos y queda 1 solo elemento a las 12hs
  const groupByType = (
    data: {
      amountCollected: number;
      collectedOn: number;
      rentId: number;
    }[]
  ) => {
    const r: { [hour: number]: number } = {};

    for (let i = 0; i < data.length; i++) {
      const e = data[i];
      if (!r[e.collectedOn]) r[e.collectedOn] = e.amountCollected;
      else r[e.collectedOn] += e.amountCollected;
    }

    return r;
  };
  
  const historyGrouped = groupByType(props.historyData.history)

  const options = {
    animationEnabled: true,
    title: {
      text: "GRAFICO ULTIMOS COBROS",
    },
    axisY: {
      title: "234567865",
      suffix: "$",
    },
    data: [
      {
        type: "splineArea",
        xValueFormatString: "YYYY",
        yValueFormatString: "#,##0.## bn kW⋅h",
        showInLegend: true,
        legendText: "kWh = one kilowatt hour",
        dataPoints: Object.keys(historyGrouped).map((e) => {
          const key = parseInt(e)
          return {
            x: key,
            y: historyGrouped[key],
          }
        }),
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
