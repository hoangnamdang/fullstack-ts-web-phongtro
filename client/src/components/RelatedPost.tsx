import { Box } from "@mui/material";
import React, { useEffect } from "react";
import RelatedPostIem from "./RelatedPostIem";
import { getLatedPost } from "../features/post/post.slice";
import { useAppDispatch, useAppSelector } from "../store/store";

const RelatedPost = () => {
  const dispatch = useAppDispatch();
  const dataLatedPost = useAppSelector((state) => state.post.latedPost);

  useEffect(() => {
    dispatch(getLatedPost());
  }, [dispatch]);
  return (
    <Box
      sx={{
        bgcolor: "white",
        padding: 3,
        borderRadius: 2,
        marginBottom: 4,
        boxShadow:
          "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;",
      }}
    >
      <RelatedPostIem title="Tin moi dang" dataLatedPost={dataLatedPost} />
    </Box>
  );
};

export default RelatedPost;
