import React from "react";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const Info = () => {
  return (
    <Grid container spacing={0}>
      <Paper
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <br />
        <Grid container spacing={0} justify="center" direction="column">
          <Grid item xs={12}>
            <Typography align="center" variant="h6" color="initial">
              Tack för att ni använder denna app.
            </Typography>
            <Typography align="center" variant="h6" color="initial">
              Tack till <a href="https://skanesit.se">Skånes IT</a> som har
              utvecklat denna app.
            </Typography>
          </Grid>
        </Grid>
        <br />
      </Paper>
    </Grid>
  );
};

export default Info;
