import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { LineAxis } from "@mui/icons-material";

export default function BasicArea() {
  return (
    <div className="flex flex-col mt-10 bg-side-color rounded-lg shadow-lg h-96">
      <div className="mt-5 ml-5">Account - Balance</div>
      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        axisHighlight={{ y: "line" }}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
            area: true,
            curve: "linear",
          },
        ]}
        width={500}
        height={300}
      />
    </div>
  );
}
