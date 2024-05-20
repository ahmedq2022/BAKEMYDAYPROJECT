import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import {
  PieItemIdentifier,
  DefaultizedPieValueType
} from "@mui/x-charts/models";
import { Typography, Stack } from "@mui/material";

const items = [
  { value: 10, label: "Products" },
  { id: "id_B", value: 15, label: "Orders" },
  { id: "id_C", value: 20, label: "Amount" }
];

const formatObject = obj => {
  if (obj === null) {
    return "  undefined";
  }
  return JSON.stringify(obj, null, 2).split("\n").map(l => `  ${l}`).join("\n");
};
export default function Piechart() {
  const [identifier, setIdentifier] = React.useState(null);
  const [id, setId] = React.useState(0);

  const handleClick = (event, itemIdentifier, item) => {
    setId(item.id);
    setIdentifier(itemIdentifier);
  };

  return (
    <Stack sx={{ width: "100%" }}>
      <PieChart
        series={[
          {
            data: items
          }
        ]}
        onClick={handleClick}
        width={520}
        height={320}
        margin={{ right: 200 }}
      />
    </Stack>
  );
}
