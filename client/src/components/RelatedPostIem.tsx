import { Box, Typography } from "@mui/material";
import React from "react";
import { ILatedPost } from "../features/post/post.type";
import dayjs from "dayjs";
interface RelatedPostIemProps {
  title: string;
  dataLatedPost: ILatedPost[];
}
const RelatedPostIem = ({ title, dataLatedPost }: RelatedPostIemProps) => {
  return (
    <Box>
      <Typography variant="h6" fontWeight={600} marginBottom={2}>
        {title}
      </Typography>
      {dataLatedPost.map((post) => {
        return (
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            gap={1}
            sx={{
              borderBottom: "1px solid gray",
              paddingBottom: 1,
              marginBottom: 2,
            }}
          >
            <img
              width={65}
              height={65}
              loading="lazy"
              src="	https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2024/07/23/img-1234_1721736010.jpg"
              alt=""
            />
            <Box>
              <Typography>{post.title}</Typography>
              <Box display={"flex"} justifyContent={"space-between"}>
                <Typography sx={{ color: "green", fontWeight: "600" }}>
                  {post.price}
                </Typography>
                <Typography sx={{ color: "gray" }}>
                  {dayjs(new Date()).diff(post.createdAt, "day")} ngay truoc
                </Typography>
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default RelatedPostIem;
