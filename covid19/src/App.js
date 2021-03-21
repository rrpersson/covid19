import BottomNav from "./components/BottomNav";
import Header from "./components/Header";
import Info from "./components/Info";
import Statistics from "./components/Statistics";
import SearchResult from "./components/SearchResult";
import "./App.css";

import { useEffect, useState } from "react";

import Grid from "@material-ui/core/Grid";

function App() {
  const [appCounter, setAppCounter] = useState("");
  const [covidData, setCovidData] = useState();

  const apiURL = "https://covid-api.mmediagroup.fr/v1/cases?country=Sweden";

  useEffect(() => {
    fetch(apiURL)
      .then((response) => response.json())
      .then((json) => setCovidData(json));
  }, []);

  if (appCounter === "statistics") {
    return (
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Statistics covidData={covidData} />
        <Grid item xs={12}>
          <BottomNav appCounter={appCounter} setAppCounter={setAppCounter} />
        </Grid>
      </Grid>
    );
  } else if (appCounter === "search") {
    return (
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <SearchResult covidData={covidData} />
        <Grid item xs={12}>
          <BottomNav appCounter={appCounter} setAppCounter={setAppCounter} />
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
          <BottomNav appCounter={appCounter} setAppCounter={setAppCounter} />
        </Grid>
      </Grid>
    );
  }
}

export default App;
