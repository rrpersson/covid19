import React from "react";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import InfoOutlined from "@material-ui/icons/InfoOutlined";
import EqualizerOutlinedIcon from "@material-ui/icons/EqualizerOutlined";
import SearchIcon from "@material-ui/icons/Search";

const BottomNav = ({ appCounter, setAppCounter }) => {
  return (
    <BottomNavigation
      showLabels="true"
      style={{
        width: "100%",
        position: "fixed",
        bottom: 0,
      }}
    >
      <BottomNavigationAction
        label="Statistik"
        value="statistics"
        icon={<EqualizerOutlinedIcon />}
        onClick={() => {
          setAppCounter("statistics");
        }}
      />
      <BottomNavigationAction
        label="Sök"
        value="search"
        icon={<SearchIcon />}
        onClick={() => {
          setAppCounter("search");
        }}
      />
      <BottomNavigationAction
        label="Info"
        value="info"
        icon={<InfoOutlined />}
        onClick={() => {
          setAppCounter("");
        }}
      />
    </BottomNavigation>
  );
};

export default BottomNav;
