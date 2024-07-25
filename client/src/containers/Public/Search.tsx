import { Box, Button, InputAdornment, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import CropOutlinedIcon from "@mui/icons-material/CropOutlined";
import ModalSearch from "../../components/ModalSearch";
import {
  IFilterAcreage,
  IFilterPrice,
} from "../../features/filter/filter.type";
import { Category } from "../../features/app/app.type";
import {
  convert100PercentTo15,
  convert100PercentTo90,
  roundHalf,
} from "../../utils/commonUtil";
import { useAppSelector } from "../../store/store";
import { useSearchParams } from "react-router-dom";
export interface IDataContent {
  title: string;
  data: IFilterAcreage[] | Category[] | IFilterPrice[];
  type: "category" | "province" | "price" | "acreage";
}

export type IRange = {
  [key in IDataContent["type"]]?: number[];
};

export type IBtnClicked = {
  [key in IDataContent["type"]]?: number | string;
};

export type IValueRadio = {
  [key in IDataContent["type"]]?: string;
};

const Search = () => {
  const listCategory = useAppSelector((state) => state.app.categories);
  const [searchParams] = useSearchParams();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [type, setType] = useState<IDataContent["type"]>("category");
  const [ranges, setRange] = useState<IRange>({
    price: [0, 100],
    acreage: [0, 100],
  });
  const [idBtnClicked, setIdBtnClicked] = useState<IBtnClicked>({
    price: "",
    acreage: "",
  });
  const [valueRadio, setValueRadio] = useState<IValueRadio>({
    category: "",
    province: "",
  });

  useEffect(() => {
    if (searchParams.size === 0) {
      setRange({
        price: [0, 100],
        acreage: [0, 100],
      });
      setIdBtnClicked({
        price: "",
        acreage: "",
      });
      setValueRadio({
        category: "",
        province: "",
      });
    }
  }, [searchParams]);
  const getTextSearch = (): {
    price: string;
    acreage: string;
    category: string;
  } => {
    const itemCategory = listCategory.find(
      (item) => item.id === (Number(valueRadio?.category) || -1)
    );

    return {
      category: `${itemCategory?.value || ""}`,
      price: `Tu ${roundHalf(
        convert100PercentTo15(ranges?.price?.[0] || 0)
      )}-${roundHalf(convert100PercentTo15(ranges?.price?.[1] || 0))} trieu`,
      acreage: `Tu ${convert100PercentTo90(
        ranges?.acreage?.[0] || 0
      )}-${convert100PercentTo90(ranges?.acreage?.[1] || 0)} m2`,
    };
  };

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
        onClick={() => {
          handleOpen();
          setType("category");
        }}
        value={getTextSearch()["category"]}
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
        onClick={() => {
          handleOpen();
          setType("province");
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
        onClick={() => {
          handleOpen();
          setType("price");
        }}
        value={getTextSearch()["price"]}
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
        onClick={() => {
          handleOpen();
          setType("acreage");
        }}
        value={getTextSearch()["acreage"]}
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
      {open && (
        <ModalSearch
          open={open}
          type={type}
          handleClose={handleClose}
          ranges={ranges}
          valueRadio={valueRadio}
          idBtnClicked={idBtnClicked}
          setRange={setRange}
          setIdBtnClicked={setIdBtnClicked}
          setValueRadio={setValueRadio}
        />
      )}
    </Box>
  );
};

export default Search;
