import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const Statistics = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Typography variant="body1" color="initial">
          Senaste Dödssiffra i hela Sverige
        </Typography>
        <Typography variant="body2" color="initial">
          53874568st döda
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Statistics;
