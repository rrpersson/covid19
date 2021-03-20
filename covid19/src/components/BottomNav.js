import React from "react";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import InfoOutlined from "@material-ui/icons/InfoOutlined";
import EqualizerOutlinedIcon from "@material-ui/icons/EqualizerOutlined";

const BottomNav = ({ counter, setCounter, setCounterChange }) => {
  return (
    <BottomNavigation
      showLabels="true"
      value={counter}
      onChange={setCounterChange}
    >
      <BottomNavigationAction
        label="Statistik"
        value="Statistik"
        icon={<EqualizerOutlinedIcon />}
      />
      <BottomNavigationAction
        label="Info"
        value="Info"
        icon={<InfoOutlined />}
      />
    </BottomNavigation>
  );
};

export default BottomNav;
