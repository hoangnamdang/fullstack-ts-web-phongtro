import React from "react";
import { dataProvince } from "../utils/constant";
import ProvinceItem from "./ProvinceItem";
import { Box } from "@mui/material";

const Province = () => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={3}
      marginBottom={3}
    >
      {dataProvince.map((province, idx) => {
        return <ProvinceItem key={idx} province={province} />;
      })}
    </Box>
  );
};

export default Province;
