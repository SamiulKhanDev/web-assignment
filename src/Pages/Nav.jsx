import React from "react";
import Navbar from "../Components/Navbar";
import NavigationList from "../Components/NavigationList";

const Nav = () => {
  return (
    <div className="overflow-x-scroll">
      <Navbar />
      <NavigationList />
    </div>
  );
};

export default Nav;
