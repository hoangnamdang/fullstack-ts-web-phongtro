import { Box, Typography } from "@mui/material";
import React from "react";
interface IProps {
  name: string;
  image: string;
}
const ProvinceItem = ({ province }: { province: IProps }) => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        boxShadow:
          "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;",
        color: "blue",
        ":hover": { color: "orange" },
      }}
    >
      <img
        width={220}
        height={120}
        src={province.image}
        alt={province.name}
        loading="lazy"
      />
      <Typography
        textAlign={"center"}
        sx={{ padding: [1, 1], fontWeight: "bold" }}
      >
        {province.name}
      </Typography>
    </Box>
  );
};

export default ProvinceItem;
