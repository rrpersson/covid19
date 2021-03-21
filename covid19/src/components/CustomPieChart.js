import React from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";

const CustomPieChart = ({ covidData }) => {
  const pieData = [
    { name: "Covid19 fall", value: covidData.Halland.confirmed },
    { name: "Bekräftade dödsfall", value: covidData.Halland.deaths },
  ];

  return (
    <ResponsiveContainer width="100%" height={200}>
      <PieChart width={400} height={200}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={pieData}
          outerRadius={80}
          fill="#8884d8"
          label
        />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CustomPieChart;
