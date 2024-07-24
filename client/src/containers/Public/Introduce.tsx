import { Box, Typography } from "@mui/material";
import React from "react";
import { dataIntroduce } from "../../utils/constant";
import StarIcon from "@mui/icons-material/Star";
const Introduce = () => {
  return (
    <Box
      sx={{
        padding: 3,
        background: "white",
        textAlign: "center",
        marginBottom: 4,
        borderRadius: 4,
      }}
    >
      <Typography variant="h5" fontWeight={"600"} marginBottom={2}>
        {dataIntroduce.title}
      </Typography>
      <Typography marginBottom={2}>{dataIntroduce.description}</Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 3,
        }}
      >
        {dataIntroduce.statistic.map((item, idx) => {
          return (
            <div key={idx}>
              <Typography variant="h6" fontWeight={"600"}>
                {item.total}
              </Typography>
              <Typography>{item.name}</Typography>
            </div>
          );
        })}
      </Box>
      <Typography variant="h6" fontWeight={"600"} marginBottom={2}>
        {dataIntroduce.logan}
      </Typography>
      {Array(dataIntroduce.star)
        .fill(0)
        .map((_, idx) => {
          return <StarIcon key={idx} sx={{ color: "yellow" }} />;
        })}
      <Typography margin={2}>{dataIntroduce.logan}</Typography>
      <Typography fontStyle={"italic"}>{dataIntroduce.comment}</Typography>
    </Box>
  );
};

export default Introduce;
