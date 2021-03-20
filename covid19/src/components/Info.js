import React from "react";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const Info = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Typography variant="h6" color="initial">
          Tack för att du använder denna app!
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" color="initial">
          Tacks till SkånesIT som uttvecklat denna app.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Info;
