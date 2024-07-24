import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Search from "./Search";
import Introduce from "./Introduce";
import Contact from "./Contact";

const Home: React.FC = () => {
  return (
    <Box>
      <Header />
      <Navigation />
      <Search />
      <Outlet />
      <Introduce />
      <Contact />
    </Box>
  );
};

export default Home;
