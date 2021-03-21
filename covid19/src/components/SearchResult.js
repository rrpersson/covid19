import React from "react";
import { useState } from "react";

import CustomPieChart from "./CustomPieChart";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";

const SearchResult = ({ covidData }) => {
  const [text, setText] = useState("Stockholm");

  const setTextChange = (event) => {
    setText(event.target.value);
  };

  const population = covidData.All.population;
  let locationInfo = null;
  let lastUpdated = null;
  switch (text) {
    case "Stockholm":
      locationInfo = covidData.Stockholm;
      lastUpdated = locationInfo.updated;
      break;
    case "Blekinge":
      locationInfo = covidData.Blekinge;
      lastUpdated = locationInfo.updated;
      break;
    case "Dalarna":
      locationInfo = covidData.Dalarna;
      lastUpdated = locationInfo.updated;
      break;
    case "Gavleborg":
      locationInfo = covidData.Gavleborg;
      lastUpdated = locationInfo.updated;
      break;
    case "Gotland":
      locationInfo = covidData.Gotland;
      lastUpdated = locationInfo.updated;
      break;
    case "Halland":
      locationInfo = covidData.Halland;
      lastUpdated = locationInfo.updated;
      break;
    case "Jonkoping":
      locationInfo = covidData.Jonkoping;
      lastUpdated = locationInfo.updated;
      break;
    case "Kalmar":
      locationInfo = covidData.Kalmar;
      lastUpdated = locationInfo.updated;
      break;
    case "Kronoberg":
      locationInfo = covidData.Kronoberg;
      lastUpdated = locationInfo.updated;
      break;
    case "Norrbotten":
      locationInfo = covidData.Norrbotten;
      lastUpdated = locationInfo.updated;
      break;
    case "Orebro":
      locationInfo = covidData.Orebro;
      lastUpdated = locationInfo.updated;
      break;
    case "Ostergotland":
      locationInfo = covidData.Ostergotland;
      lastUpdated = locationInfo.updated;
      break;
    case "Skane":
      locationInfo = covidData.Skane;
      lastUpdated = locationInfo.updated;
      break;
    case "Sormland":
      locationInfo = covidData.Sormland;
      lastUpdated = locationInfo.updated;
      break;
    case "Uppsala":
      locationInfo = covidData.Uppsala;
      lastUpdated = locationInfo.updated;
      break;
    case "Varmland":
      locationInfo = covidData.Varmland;
      lastUpdated = locationInfo.updated;
      break;
    case "Vasterbotten":
      locationInfo = covidData.Vasterbotten;
      lastUpdated = locationInfo.updated;
      break;
    case "Vastmanland":
      locationInfo = covidData.Vastmanland;
      lastUpdated = locationInfo.updated;
      break;
    default:
      locationInfo = null;
      lastUpdated = null;
  }
  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <Grid container justify="center">
          <FormControl style={{ width: "90%" }}>
            <InputLabel id="selectList">Plats</InputLabel>
            <Select id="selectList" onChange={setTextChange} value={text}>
              <MenuItem value="Stockholm">Stockholm</MenuItem>
              <MenuItem value="Blekinge">Blekinge</MenuItem>
              <MenuItem value="Dalarna">Dalarna</MenuItem>
              <MenuItem value="Gavleborg">Gävleborg</MenuItem>
              <MenuItem value="Gotland">Gotland</MenuItem>
              <MenuItem value="Halland">Halland</MenuItem>
              <MenuItem value="Jonkoping">Jönköping</MenuItem>
              <MenuItem value="Kalmar">Kalmar</MenuItem>
              <MenuItem value="Kronoberg">Kronoberg</MenuItem>
              <MenuItem value="Norrbotten">Norrbotten</MenuItem>
              <MenuItem value="Orebro">Örebro</MenuItem>
              <MenuItem value="Ostergotland">Östergötland</MenuItem>
              <MenuItem value="Skane">Skåne</MenuItem>
              <MenuItem value="Sormland">Sörmland</MenuItem>
              <MenuItem value="Uppsala">Uppsala</MenuItem>
              <MenuItem value="Varmland">Värmland</MenuItem>
              <MenuItem value="Vasterbotten">Västerbotten</MenuItem>
              <MenuItem value="Vastmanland">Västmanland</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Paper
          style={{
            width: "100%",
            padding: 30,
          }}
        >
          <Typography align="center" variant="h6" color="initial">
            Bekräftade Covid19 fall
          </Typography>
          <CustomPieChart
            pieData={[
              { name: "Antal invånare i Sverige", value: population },
              { name: "Bekräftade dödsfall", value: locationInfo.confirmed },
            ]}
          />
        </Paper>
      </Grid>
      <Grid container justify="center">
        <Paper
          style={{
            width: "100%",
            padding: 30,
          }}
        >
          <Typography align="center" variant="h6" color="initial">
            Antal bekräftade fall som avlidit
          </Typography>
          <CustomPieChart
            pieData={[
              { name: "Covid19 fall", value: locationInfo.confirmed },
              { name: "Bekräftade dödsfall", value: locationInfo.deaths },
            ]}
          />
          <Typography align="center" variant="subtitle1" color="initial">
            {/* Senast uppdaterad: {lastUpdated} */}
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default SearchResult;
