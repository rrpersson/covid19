import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";

const Statistics = ({ covidData }) => {
  console.log(covidData);
  const chartDataConfirmedCases = [
    { name: "Invånare i Sverige", value: covidData.All.population },
    { name: "Bekräftade Covid19 fall", value: covidData.All.confirmed },
  ];

  const chartDataConfirmedDeaths = [
    { name: "Covid19 fall", value: covidData.All.confirmed },
    { name: "Bekräftade dödsfall", value: covidData.All.deaths },
  ];

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={6}>
        <Paper
          style={{
            padding: 20,
          }}
        >
          <Typography align="center" variant="h6" color="initial">
            Bekräftade Covid19 fall i Sverige
          </Typography>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart width={400} height={200}>
              <Pie
                dataKey="value"
                isAnimationActive={true}
                data={chartDataConfirmedCases}
                outerRadius={80}
                fill="#8884d8"
                label
              />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper
          style={{
            padding: 20,
          }}
        >
          <Typography align="center" variant="h6" color="initial">
            Antal bekräftade fall som avlidit
          </Typography>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart width={400} height={200}>
              <Pie
                dataKey="value"
                isAnimationActive={true}
                data={chartDataConfirmedDeaths}
                outerRadius={80}
                fill="#8884d8"
                label
              />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Statistics;
