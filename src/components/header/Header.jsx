import React from "react";
import Navbar from "../navbar/Navbar";
import SearchBar from "../searchBar/SearchBar";

const Header = () => {
  return (
    <>
      <div>
        <Navbar />
        <SearchBar />
      </div>
    </>
  );
};

export default Header;
