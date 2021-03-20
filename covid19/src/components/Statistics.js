import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const Statistics = ({ covidData }) => {
  return (
    <Grid container spacing={0} justify="center">
      <Paper
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <br />
        <Grid item xs={12}>
          <Grid
            container
            spacing={0}
            justify="center"
            alignItems="center"
            direction="column"
          >
            <Typography variant="h6" color="initial">
              Bekräftade Covid19 fall i hela Sverige
            </Typography>
            <Typography variant="h5" color="initial">
              {covidData.All.confirmed}st
            </Typography>
          </Grid>
        </Grid>
        <br />
        <Grid item xs={12}>
          <Grid
            container
            spacing={0}
            justify="center"
            alignItems="center"
            direction="column"
          >
            <Typography variant="h6" color="initial">
              Bekräftade dödsfall i hela Sverige
            </Typography>
            <Typography variant="h5" color="initial">
              {covidData.All.deaths}st
            </Typography>
          </Grid>
        </Grid>
        <br />
      </Paper>
    </Grid>
  );
};

export default Statistics;
