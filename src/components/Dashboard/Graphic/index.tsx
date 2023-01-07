import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { getAllRentsHistory, RentHistory } from "../../../services/dashboard";
import SelectInput from "../../kit/Inputs/Select";
import CanvasJSReact from "./canvasjs.react";
import "./DashboardGraphic.scss";
import { rentTypeToES } from "../../../services/rents";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const defaultRentHistory = {
  type: "Hourly",
  totalToCollect: 0,
  history: [],
};
export default function DashboardGraphic() {
  const [historyData, setHistoryData] =
    useState<RentHistory>(defaultRentHistory);
  const [selectButton, setSelectButton] = useState("Hourly");

  const options = {
    animationEnabled: true,

    title: {
      text:
        historyData.history.length > 3
          ? "GRAFICOS ULTIMOS COBROS " +
            rentTypeToES(selectButton).toUpperCase()
          : "NO HAY COBROS  " + rentTypeToES(selectButton).toUpperCase(),
    },
    axisY: {
      title:
        historyData.history.length > 3
          ? "COBRO  " + rentTypeToES(selectButton).toUpperCase()
          : "NO HAY COBROS  " + rentTypeToES(selectButton).toUpperCase(),
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
        
        dataPoints: historyData.history.length < 3 ? [] : historyData.history.map((e) => ({
          x: e.collectedOn,
          y: e.amountCollected,
        })) 
      },
    ],
  };

  const handleRentsHistory = () => {
    (async () => {
      const data = await getAllRentsHistory(selectButton);
      if (data !== undefined) {
        setHistoryData(data);
      }
    })();
  };
  useEffect(handleRentsHistory, [selectButton]);
  return (
    <Grid className="Dashboard-Graphic" container>
      <Grid className="button-select">
        <SelectInput
          items={[
            {
              value: "Hourly",
              label: "Hora",
            },
            {
              value: "Daily",
              label: "Dia",
            },
            {
              value: "Weekly",
              label: "Semanal",
            },
            {
              value: "Monthly",
              label: "Mensual",
            },
            {
              value: "Yearly",
              label: "Anual",
            },
          ]}
          itemSelected={selectButton}
          onChange={(value) => {
            setSelectButton(value as string);
          }}
        />
      </Grid>
      <CanvasJSChart
        containerProps={{ height: "100", width: "100%" }}
        options={options}
        /* onRef={ref => this.chart = ref} */
      />
    </Grid>
  );
}
