import BottonNav from "./components/BottomNav";
import Header from "./components/Header";
import Info from "./components/Info";
import Statistics from "./components/Statistics";
import "./App.css";

import { useState } from "react";

import Grid from "@material-ui/core/Grid";

function App() {
  const [counter, setCounter] = useState(0);

  const apiURL = "https://covid-api.mmediagroup.fr/v1/cases?country=Sweden";

  if (counter === 0) {
    return (
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Statistics covidData={""} />
        <Grid item xs={12}>
          <BottonNav counter={counter} setCounter={setCounter} />
        </Grid>
      </Grid>
    );
  } else {
    return (
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Info />
        <Grid item xs={12}>
          <BottonNav counter={counter} setCounter={setCounter} />
        </Grid>
      </Grid>
    );
  }
}

export default App;
