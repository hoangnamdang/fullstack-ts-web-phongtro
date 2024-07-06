import { Box, Button, InputAdornment, TextField } from "@mui/material";
import React from "react";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import CropOutlinedIcon from "@mui/icons-material/CropOutlined";
const Search = () => {
  return (
    <Box
      sx={{ bgcolor: "yellow", padding: 1, borderRadius: 1, marginBottom: 3 }}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      gap={2}
    >
      <TextField
        sx={{
          bgcolor: "white",
          outline: "none",
          padding: "4px 8px",
          borderRadius: "4px",
          width: 230,
          "& .MuiInputBase-root": {
            cursor: "pointer",
          },
          input: {
            "&:hover": {
              cursor: "pointer",
            },
          },
        }}
        placeholder="Phong tro"
        size="small"
        variant="standard"
        InputProps={{
          readOnly: true,
          disableUnderline: true,
          startAdornment: (
            <InputAdornment sx={{ cursor: "pointer" }} position="start">
              <ApartmentOutlinedIcon fontSize="small" />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment sx={{ cursor: "pointer" }} position="end">
              <CancelOutlinedIcon fontSize="small" />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        sx={{
          bgcolor: "white",
          outline: "none",
          padding: "4px 8px",
          borderRadius: "4px",
          width: 230,
          "& .MuiInputBase-root": {
            cursor: "pointer",
          },
          input: {
            "&:hover": {
              cursor: "pointer",
            },
          },
        }}
        placeholder="Toan quoc"
        size="small"
        variant="standard"
        InputProps={{
          readOnly: true,
          disableUnderline: true,
          startAdornment: (
            <InputAdornment position="start">
              <LocationOnOutlinedIcon fontSize="small" />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        sx={{
          bgcolor: "white",
          outline: "none",
          padding: "4px 8px",
          borderRadius: "4px",
          width: 230,
          "& .MuiInputBase-root": {
            cursor: "pointer",
          },
          input: {
            "&:hover": {
              cursor: "pointer",
            },
          },
        }}
        placeholder="Chon gia"
        size="small"
        variant="standard"
        InputProps={{
          readOnly: true,
          disableUnderline: true,
          startAdornment: (
            <InputAdornment position="start">
              <LocalOfferOutlinedIcon fontSize="small" />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        sx={{
          bgcolor: "white",
          outline: "none",
          padding: "4px 8px",
          borderRadius: "4px",
          width: 230,
          "& .MuiInputBase-root": {
            cursor: "pointer",
          },
          input: {
            "&:hover": {
              cursor: "pointer",
            },
          },
        }}
        placeholder="Chon dien tich"
        size="small"
        variant="standard"
        InputProps={{
          readOnly: true,
          disableUnderline: true,
          startAdornment: (
            <InputAdornment position="start">
              <CropOutlinedIcon fontSize="small" />
            </InputAdornment>
          ),
        }}
      />
      <Button
        startIcon={<SearchRoundedIcon fontSize="large" />}
        variant="contained"
        color="info"
        sx={{ width: 210 }}
      >
        Tim kiem
      </Button>
    </Box>
  );
};

export default Search;
