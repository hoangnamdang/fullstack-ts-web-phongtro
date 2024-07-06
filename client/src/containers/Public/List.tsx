import { Box, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import ListItem from "../../components/ListItem";
import { useAppDispatch, useAppSelector } from "../../store/store";
import * as postSlice from "../../features/post/post.slice";
const List = () => {
  const dispatch = useAppDispatch();
  const listPost = useAppSelector((state) => state.post.listPost);

  useEffect(() => {
    dispatch(postSlice.getAllPost());
  }, [dispatch]);

  return (
    <Box sx={{ backgroundColor: "white" }}>
      <Box sx={{ padding: [3, 2] }}>
        <Typography sx={{ fontWeight: "bold" }}>
          Tổng 128.774 kết quả
        </Typography>
        <Box display={"flex"} alignContent={"center"} gap={2}>
          <Typography padding={"6px"}>Sắp xếp:</Typography>
          <Button
            sx={{
              backgroundColor: "#f1f1f1",
              fontSize: 12,
              paddingY: "4px",
              ":first-letter": { textTransform: "uppercase" },
            }}
            color="inherit"
            size="small"
          >
            Mat dinh
          </Button>
          <Button
            sx={{
              backgroundColor: "#f1f1f1",
              fontSize: 12,
              ":first-letter": { textTransform: "uppercase" },
            }}
            color="inherit"
            size="small"
          >
            Moi nhat
          </Button>
        </Box>
      </Box>
      {listPost.map((post) => {
        return <ListItem key={post.id} post={post} />;
      })}
    </Box>
  );
};

export default List;
