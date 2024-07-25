import { Box, Grid } from "@mui/material";
import React from "react";
import SideBarItem from "../../components/SideBarItem";
import { useAppSelector } from "../../store/store";
import List from "./List";
import Province from "../../components/Province";

const Rent = () => {
  const { listPrice, listAcreage } = useAppSelector((state) => state.filter);
  return (
    <Box>
      <Province />
      <Grid
        container
        spacing={2}
        direction={{ xs: "column-reverse", md: "row" }}
      >
        <Grid item xs={12} md={8}>
          <List />
        </Grid>
        <Grid item xs={12} md={4}>
          <SideBarItem title="Xem theo gia" data={listPrice} />
          <SideBarItem title="Xem dien tich" data={listAcreage} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Rent;
