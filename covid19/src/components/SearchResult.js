import React from "react";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const SearchResult = () => {
  const [searchResult, setSearchResult] = useState("start");
  const [text, setText] = useState("");

  const setTextChange = (event) => {
    setText(event.target.value);
  };

  if (searchResult === "start") {
    return (
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Grid container justify="center">
            <TextField
              variant="filled"
              id="search"
              label="Sök på län"
              placeholder="Skåne"
              autoFocus="true"
              onChange={setTextChange}
              value={text}
            />
            <Button variant="contained" color="primary" type="submit">
              Sök
            </Button>
          </Grid>
        </Grid>
      </Grid>
    );
  } else {
    return <div>daljfhksdjfh</div>;
  }
};

export default SearchResult;
