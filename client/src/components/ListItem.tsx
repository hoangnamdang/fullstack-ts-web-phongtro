import { Box, Button, IconButton, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import { Post } from "../features/post/post.type";

const ListItem = ({ post }: { post: Post }) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const listImage = JSON.parse(post?.Image?.image || "");
  const description = JSON.parse(post?.description || "").join("");
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      gap={2}
      borderTop={"1px solid red"}
      padding={[3, 2]}
    >
      <Box width={280} height={240} position={"relative"} flexShrink={0}>
        <img src={listImage?.[0] || ""} alt="" width={"100%"} height={"100%"} />
        <Typography
          sx={{
            position: "absolute",
            left: 2,
            bottom: 10,
            padding: [0, 0.5],
            backgroundColor: "gray",
            color: "white",
            fontSize: 12,
          }}
        >
          {`${listImage?.length || 0} ảnh`}
        </Typography>
        <IconButton
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          sx={{ position: "absolute", right: 0, bottom: 0 }}
        >
          {isHover && <FavoriteIcon sx={{ color: "red" }} />}
          {!isHover && <FavoriteBorderOutlinedIcon sx={{ color: "white" }} />}
        </IconButton>
      </Box>
      <Box>
        <Box component={"span"} sx={{ ":after": { clear: "both" } }}>
          <Box
            display={"flex"}
            alignItems={"center"}
            sx={{ float: "left", lineHeight: 1.5 }}
          >
            {Array(Number(post?.star || 0))
              .fill("")
              .map((_, i) => {
                return (
                  <StarIcon key={i} fontSize="small" sx={{ color: "yellow" }} />
                );
              })}
          </Box>
          <Typography
            component={"span"}
            sx={{
              fontWeight: "bold",
              color: "red",
              marginBottom: 2,
            }}
          >
            {post.title}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography
            color={"lightgreen"}
            whiteSpace={"nowrap"}
            fontWeight={"bold"}
          >
            {post?.Attribute?.price || 0}
          </Typography>
          <Typography>60m²</Typography>
          <Typography
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "1",
              WebkitBoxOrient: "vertical",
              ":hover": { textDecoration: "underline" },
            }}
          >
            {post.address}
          </Typography>
        </Box>
        <Typography textAlign={"right"} color="gray">
          {post.Attribute.published}
        </Typography>
        <Typography
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "3",
            WebkitBoxOrient: "vertical",
            marginBottom: 2,
          }}
        >
          {description}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography>Nguoi dang</Typography>
          <Box
            sx={{
              display: "flex",
              gap: 2,
            }}
          >
            <Button
              color="info"
              variant="contained"
              size="small"
              sx={{ color: "white" }}
            >
              Goi {post.User.phone}
            </Button>
            <Button
              size="small"
              color="info"
              variant="outlined"
              sx={{ ":hover": { color: "white", backgroundColor: "#0288d1" } }}
            >
              Nhan zalo
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ListItem;
