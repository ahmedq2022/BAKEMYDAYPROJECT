import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = ["Jan", "Feb", "March", "April", "May", "June", "July"];

export default function StackedBarChart() {
  return (
    <BarChart
      width={800}
      height={500}
      series={[
        { data: pData, label: "orders", id: "pvId", stack: "total" },
        { data: uData, label: "amount", id: "uvId", stack: "total" }
      ]}
      xAxis={[{ data: xLabels, scaleType: "band" }]}
    />
  );
}
