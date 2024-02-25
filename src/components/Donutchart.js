import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import useDateStore from "./Stores/Store";

export default function Donutchart() {
  const { selectedDate } = useDateStore();

  console.log(selectedDate);
  return (
    <div className="flex flex-col mt-10 bg-side-color rounded-lg shadow-lg h-96">
      <div className="mt-5 ml-5">Total Expense</div>
      <div className="ml-5">date</div>

      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 10, label: "series A" },
              { id: 1, value: 15, label: "series B" },
              { id: 2, value: 20, label: "series C" },
            ],

            innerRadius: 85,
            outerRadius: 150,
            paddingAngle: -11,
            cornerRadius: 0,
            startAngle: -181,
            endAngle: 180,

            cx: 350,
            cy: 150,

            highlightScope: { faded: "global", highlighted: "item" },
            faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
          },
        ]}
        slotProps={{
          legend: {
            direction: "column",
            position: { vertical: "middle", horizontal: "right" },
            padding: {
              right: 250,
            },
          },
        }}
        // width={400}
        // height={200}
      />
    </div>
  );
}
