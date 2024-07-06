import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Search from "./Search";

const Home: React.FC = () => {
  return (
    <Box>
      <Header />
      <Navigation />
      <Search />
      <Outlet />
    </Box>
  );
};

export default Home;
