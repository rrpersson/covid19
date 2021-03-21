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

  switch (text) {
    case "Stockholm":
      locationInfo = covidData.Stockholm;
      break;
    case "Blekinge":
      locationInfo = covidData.Blekinge;
      break;
    case "Dalarna":
      locationInfo = covidData.Dalarna;
      break;
    case "Gavleborg":
      locationInfo = covidData.Gavleborg;
      break;
    case "Gotland":
      locationInfo = covidData.Gotland;
      break;
    case "Halland":
      locationInfo = covidData.Halland;
      break;
    case "Jonkoping":
      locationInfo = covidData.Jonkoping;
      break;
    case "Kalmar":
      locationInfo = covidData.Kalmar;
      break;
    case "Kronoberg":
      locationInfo = covidData.Kronoberg;
      break;
    case "Norrbotten":
      locationInfo = covidData.Norrbotten;
      break;
    case "Orebro":
      locationInfo = covidData.Orebro;
      break;
    case "Ostergotland":
      locationInfo = covidData.Ostergotland;
      break;
    case "Skane":
      locationInfo = covidData.Skane;
      break;
    case "Sormland":
      locationInfo = covidData.Sormland;
      break;
    case "Uppsala":
      locationInfo = covidData.Uppsala;
      break;
    case "Varmland":
      locationInfo = covidData.Varmland;
      break;
    case "Vasterbotten":
      locationInfo = covidData.Vasterbotten;
      break;
    case "Vastmanland":
      locationInfo = covidData.Vastmanland;
      break;
    default:
      locationInfo = null;
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
        </Paper>
      </Grid>
    </Grid>
  );
};

export default SearchResult;
