import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const Header = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Grid container spacing={1} justify="center">
          <Typography variant="h6" color="initial">
            Covid19 Statistik
          </Typography>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
