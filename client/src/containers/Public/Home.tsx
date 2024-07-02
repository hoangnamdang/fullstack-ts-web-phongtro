import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <Box maxWidth={1140} paddingLeft={15} paddingRight={15}>
      <Header />
      <Navigation />
      <Outlet />
    </Box>
  );
};

export default Home;
