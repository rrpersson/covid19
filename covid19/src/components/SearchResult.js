import React from "react";
import { useState } from "react";

import CustomPieChart from "./CustomPieChart";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const SearchResult = ({ covidData }) => {
  console.log(covidData);
  const [text, setText] = useState("Stockholm");

  const setTextChange = (event) => {
    setText(event.target.value);
  };

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
              <MenuItem value="Jamtland Harjedalen">
                Jämtland & Härjedalen
              </MenuItem>
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
              <MenuItem value="Vastra Gotaland">Västa Götaland</MenuItem>
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
          <Grid container justify="center">
            <p>Du sökte på {text}</p>
          </Grid>
        </Paper>
        <CustomPieChart covidData={covidData} />
      </Grid>
    </Grid>
  );
};

export default SearchResult;
