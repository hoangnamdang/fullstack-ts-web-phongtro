import { Box, Button, Pagination, Stack, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import ListItem from "../../components/ListItem";
import { useAppDispatch, useAppSelector } from "../../store/store";
import * as postSlice from "../../features/post/post.slice";
import {
  createSearchParams,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { pairSearchUrl } from "../../utils/constant";
interface IObjParams {
  [key: string]: number | string;
}
const List = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const refBox = useRef<null | HTMLElement>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const { listPost, totalPage } = useAppSelector(
    (state) => state.post.dataPosts
  );

  useEffect(() => {
    let page = 1;
    if (searchParams && searchParams.get("page")) {
      page = Number(searchParams.get("page"));
    }

    if (refBox.current) {
      refBox.current.scrollIntoView({ behavior: "smooth" });
    }

    setCurrentPage(page);

    let queryParams: IObjParams = {};
    searchParams.forEach((val, key) => {
      queryParams[key] = val;
    });

    dispatch(postSlice.getAllPostLimitSlice(queryParams));
  }, [dispatch, searchParams]);

  const handleChangePage = (evt: React.ChangeEvent<unknown>, page: number) => {
    const newSearchParams: IObjParams = { page: page };
    for (let key of Object.keys(newSearchParams)) {
      if (searchParams.has(key) && pairSearchUrl.has(key)) {
        searchParams.delete(key);
        searchParams.delete(pairSearchUrl.get(key) || "");
      }
      searchParams.append(key, newSearchParams[key]?.toString() || "");
    }
    const paramSearch = createSearchParams(searchParams).toString();
    navigate({ pathname: location.pathname, search: paramSearch });
  };

  return (
    <Box ref={refBox} sx={{ backgroundColor: "white" }}>
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
      <Stack spacing={2}>
        <Pagination
          page={currentPage}
          count={totalPage}
          showFirstButton
          showLastButton
          onChange={handleChangePage}
          variant="outlined"
          size="large"
          color="primary"
        />
      </Stack>
    </Box>
  );
};

export default List;
