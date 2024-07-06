import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { titleHomepage } from "../../utils/constant";
import Province from "../../components/Province";
import List from "./List";
import SideBar from "./SideBar";

const HomePage = () => {
  return (
    <Box>
      <Box marginBottom={3}>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", textAlign: "center" }}
        >
          {titleHomepage.title}
        </Typography>
        <Typography>{titleHomepage.description}</Typography>
      </Box>
      <Typography
        sx={{ textAlign: "center", fontWeight: "bold", marginBottom: 2 }}
      >
        Khu vực nổi bật
      </Typography>
      <Province />
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          <List />
        </Grid>
        <Grid item xs={6} md={4}>
          <SideBar />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
