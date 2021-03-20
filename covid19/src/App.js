import BottonNav from "./components/BottomNav";
import Header from "./components/Header";
import "./App.css";

import { useState } from "react";

import Grid from "@material-ui/core/Grid";

function App() {
  const [counter, setCounter] = useState(0);

  if (counter === 0) {
    return (
      <Grid container spacing={1} justify="center" alignContent="center">
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <BottonNav counter={counter} setCounter={setCounter} />
        </Grid>
      </Grid>
    );
  } else {
    return (
      <Grid container spacing={1} justify="center" alignContent="center">
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <BottonNav counter={counter} setCounter={setCounter} />
        </Grid>
      </Grid>
    );
  }
}

export default App;
