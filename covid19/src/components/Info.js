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
            <br />
            <Typography
              variant="body1"
              color="initial"
              style={{
                paddingRight: 30,
                paddingLeft: 30,
              }}
            >
              Vi har valt att plocka fram en app som enkelt ska kunna visa dig
              nödvändig information på ett och samma ställe. All data som ni kan
              se i appen uppdateras varje dag för att ni enkelt ska kunna få så
              exakta siffror som möjligt.
            </Typography>
            <br />
            <Typography align="center" variant="body2" color="initial">
              App skapad av <a href="https://skanesit.se">Skånes IT</a>
            </Typography>
          </Grid>
        </Grid>
        <br />
      </Paper>
    </Grid>
  );
};

export default Info;
