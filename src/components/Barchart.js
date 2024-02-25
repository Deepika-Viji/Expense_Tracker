import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

export default function Barchart() {
  return (
    <div className="flex flex-col mt-10 bg-side-color rounded-lg shadow-lg h-96">
      <div className="mt-5 ml-5">Income - Expense</div>
      <BarChart
        xAxis={[{ scaleType: "band", data: ["group A", "group B"] }]}
        series={[
          { data: [4, 3], label: "group A" },
          { data: [1, 6], label: "group B" },
        ]}
        width={500}
        height={300}
      />
    </div>
  );
}
