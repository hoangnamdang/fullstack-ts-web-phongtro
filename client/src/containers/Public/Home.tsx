import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import { Box } from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import Search from "./Search";
import Introduce from "./Introduce";
import Contact from "./Contact";
import { PATH } from "../../utils/path";

const Home: React.FC = () => {
  const location = useLocation();
  const isPageAccount =
    location.pathname?.includes(PATH.LOGIN) ||
    location.pathname?.includes(PATH.REGISTER);
  const isPageDetail = location.pathname?.includes(PATH.DETAIL);
  console.log({ isPageAccount, isPageDetail });

  return (
    <Box>
      <Header />
      <Navigation />
      {!(isPageAccount || isPageDetail) && <Search />}
      <Outlet />
      <Introduce />
      <Contact />
    </Box>
  );
};

export default Home;
