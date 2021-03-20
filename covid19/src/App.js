import BottonNav from "./components/BottomNav";
import "./App.css";

import { useState } from "react";

import Grid from "@material-ui/core/Grid";

function App() {
  const [counter, setCounter] = useState(0);

  const setCounterChange = () => {
    setCounter(counter + 1);
    console.log(setCounterChange);
  };
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <BottonNav
          counter={counter}
          setCounter={setCounter}
          setCounterChange={setCounterChange}
        />
      </Grid>
    </Grid>
  );
}

export default App;
