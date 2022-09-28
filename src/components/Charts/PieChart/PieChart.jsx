import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";

const Chart1 = () => {
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
    { name: "Group E", value: 278 },
    { name: "Group F", value: 189 },
  ];

  return (
      <PieChart width={300} height={200}>
        <h1>Hello</h1>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#000"
          label
        />
        <Tooltip />
      </PieChart>
  );
};

export default Chart1;
