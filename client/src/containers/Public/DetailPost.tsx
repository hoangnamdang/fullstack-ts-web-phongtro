import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Slider, { CustomArrowProps } from "react-slick";
import { getPostService } from "../../services/post.service";
import {
  Box,
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import userImg from "../../asset/user.png";
import CircleIcon from "@mui/icons-material/Circle";
import PhoneIcon from "@mui/icons-material/Phone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import TagIcon from "@mui/icons-material/Tag";
import { PATH } from "../../utils/path";
import { slug } from "../../utils/generatePath";
import RelatedPost from "../../components/RelatedPost";
import { IDetailPost } from "../../features/post/post.type";
const DetailPost = () => {
  const { postId } = useParams();
  const [post, setPost] = useState<IDetailPost>();

  useEffect(() => {
    const getPost = async (id: string | undefined) => {
      if (id) {
        const response = await getPostService(id);
        setPost(response.data);
      }
    };
    getPost(postId);
  }, [postId]);

  const SampleNextArrow = (props: CustomArrowProps) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", fontSize: 40 }}
        onClick={onClick}
      />
    );
  };

  const images = post?.Image?.image && JSON.parse(post?.Image?.image);

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SampleNextArrow />,
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={8} md={8}>
        <Slider {...settings}>
          {images?.map((img: string) => {
            return (
              <Box key={img}>
                <img
                  src={img}
                  width={"100%"}
                  height={"300px"}
                  style={{ objectFit: "cover" }}
                  alt=""
                />
              </Box>
            );
          })}
        </Slider>
        <Box sx={{ background: "white", padding: 2 }}>
          <Box
            marginBottom={1}
            display={"block"}
            component={"span"}
            sx={{ ":after": { clear: "both" } }}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              sx={{ float: "left", lineHeight: 1.5 }}
            >
              {Array(Number(post?.star || 0))
                .fill("")
                .map((_, i) => {
                  return <StarIcon key={i} sx={{ color: "yellow" }} />;
                })}
            </Box>
            <Typography
              component={Link}
              to={`${PATH.DETAIL}${slug(post?.title || "")}/${post?.id || ""}`}
              sx={{
                textDecoration: "none",
                fontWeight: "bold",
                color: "red",
                marginBottom: 2,
                fontSize: 20,
                ":hover": {
                  textDecoration: "underline",
                },
              }}
            >
              {post?.title}
            </Typography>
          </Box>

          <Typography
            display={"flex"}
            alignItems={"center"}
            gap={1}
            marginBottom={1}
          >
            <LocationOnIcon color="info" />
            {post?.title}
          </Typography>

          <Box display={"flex"} alignItems={"center"} gap={4} marginBottom={3}>
            <Typography display={"flex"} alignItems={"center"} gap={1}>
              <LocalOfferIcon />
              {post?.price || 0}
            </Typography>
            <Typography display={"flex"} alignItems={"center"} gap={1}>
              <AspectRatioIcon />
              {post?.acreage || 0}m2
            </Typography>
            <Typography display={"flex"} alignItems={"center"} gap={1}>
              <WatchLaterIcon color="info" />1 ngay
            </Typography>
            <Typography display={"flex"} alignItems={"center"} gap={1}>
              <TagIcon color="info" />
              {post?.Overview?.code || ""}
            </Typography>
          </Box>
          <Typography
            sx={{ fontWeight: "bold", fontSize: 20, marginBottom: 1 }}
          >
            Thong tin mo ta
          </Typography>
          <Typography marginBottom={2}>
            {post?.description && JSON.parse(post?.description).join(", ")}
          </Typography>
          <Typography
            sx={{ fontWeight: "bold", fontSize: 20, marginBottom: 1 }}
          >
            Dac diem dang tin
          </Typography>
          <TableContainer sx={{ marginBottom: 2 }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableBody>
                <TableRow>
                  <TableCell>Ma tin</TableCell>
                  <TableCell>{post?.Attribute?.hashtag || ""}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Chuyen muc</TableCell>
                  <TableCell>{post?.Label?.value || ""}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Khu vuc</TableCell>
                  <TableCell>{post?.Overview?.area || ""}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Loai tin rao</TableCell>
                  <TableCell>{post?.Overview?.type || ""}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Doi tuong thue</TableCell>
                  <TableCell>{post?.Overview?.target || ""}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Goi tin</TableCell>
                  <TableCell>{post?.Overview?.bonus || ""}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Ngay dang</TableCell>
                  <TableCell>{post?.Overview?.created || ""}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Ngay het hang</TableCell>
                  <TableCell>{post?.Overview?.expired || ""}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Typography
            sx={{ fontWeight: "bold", fontSize: 20, marginBottom: 1 }}
          >
            Thong tin lien he
          </Typography>
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableBody>
                <TableRow>
                  <TableCell>Lien he</TableCell>
                  <TableCell>{post?.User?.name || ""}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Dien thoai</TableCell>
                  <TableCell>{post?.User?.phone || ""}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Zalo</TableCell>
                  <TableCell>{post?.User?.zalo || ""}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Grid>
      <Grid item xs={4} md={4}>
        <Box
          sx={{
            height: "300px",
            background: "yellow",
            display: "flex",
            padding: 2,
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "5px",
            marginBottom: 2,
          }}
        >
          <img src={userImg} width={80} height={80} alt="" />
          <Typography fontSize={20} fontWeight={"400"} marginBottom={1}>
            Nguoi dang bai
          </Typography>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              fontSize: 14,
              marginBottom: 1,
            }}
          >
            <CircleIcon color="success" fontSize="small" />
            Dang hoat dong
          </Typography>
          <Button
            size="small"
            fullWidth
            sx={{
              background: "green",
              color: "white",
              fontWeight: "bold",
              fontSize: 18,
              display: "flex",
              alignItems: "center",
              marginBottom: 1,
            }}
          >
            <PhoneIcon /> 098763333
          </Button>
          <Button
            fullWidth
            sx={{
              color: "gray",
              fontWeight: "bold",
              background: "white",
              fontSize: 12,
              display: "flex",
              alignItems: "center",
              marginBottom: 1,
              border: "1px solid gray",
              ":hover": {
                color: "gray",
                background: "white",
              },
            }}
          >
            Nhan zalo
          </Button>
          <Button
            fullWidth
            sx={{
              color: "gray",
              fontWeight: "bold",
              background: "white",
              fontSize: 12,
              display: "flex",
              alignItems: "center",
              border: "1px solid gray",
              ":hover": {
                color: "gray",
                background: "white",
              },
            }}
          >
            <FavoriteIcon />
            yeu thich
          </Button>
        </Box>
        <RelatedPost />
      </Grid>
    </Grid>
  );
};

export default DetailPost;
