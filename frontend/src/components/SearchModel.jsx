import { Search } from "@mui/icons-material";
import React from "react";
import search from "../images/search.png";

const SearchModel = () => {
  return (
    <div className="Search">
      <div className="w-6 h-6 search-icon hover:w-6.5 h-6.5 hover:transform hover:scale-110 transition-transform duration-200 ease-in">
        <img style={{ objectFit: "cover" }} src={search} alt="" />
      </div>
    </div>
  );
};

export default SearchModel;
