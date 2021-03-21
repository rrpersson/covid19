import React from "react";
import { useState } from "react";
import Button from "@material-ui/core/Button";

const SearchResult = () => {
  const [searchResultCounter, setSearchResultCounter] = useState(0);
  return (
    <div>
      {searchResultCounter}

      <Button variant="contained" color="primary">
        +1
      </Button>
    </div>
  );
};

export default SearchResult;
