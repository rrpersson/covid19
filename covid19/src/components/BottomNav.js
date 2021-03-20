import React from "react";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import InfoOutlined from "@material-ui/icons/InfoOutlined";
import EqualizerOutlinedIcon from "@material-ui/icons/EqualizerOutlined";

const BottomNav = ({ counter, setCounter, setCounterChange }) => {
  return (
    <BottomNavigation showLabels="true" value={counter}>
      <BottomNavigationAction
        label="Statistik"
        value="Statistik"
        icon={<EqualizerOutlinedIcon />}
        onClick={() => {
          setCounter(0);
        }}
      />
      <BottomNavigationAction
        label="Info"
        value="Info"
        icon={<InfoOutlined />}
        onClick={() => {
          setCounter(1);
        }}
      />
    </BottomNavigation>
  );
};

export default BottomNav;
