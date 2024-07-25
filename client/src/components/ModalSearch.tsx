import React, { Dispatch, SetStateAction } from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  Box,
  Button,
  FormControlLabel,
  IconButton,
  Radio,
  RadioGroup,
  Slider,
} from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import {
  IBtnClicked,
  IDataContent,
  IRange,
  IValueRadio,
} from "../containers/Public/Search";
import { grey } from "@mui/material/colors";
import { createSearchParams, useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../store/store";
import { Category } from "../features/app/app.type";
import { slug } from "../utils/generatePath";
import {
  convert100PercentTo15,
  convert100PercentTo90,
  convertTargetTo100Percent,
  numToMillion,
  roundHalf,
} from "../utils/commonUtil";

interface ModalSearchProps {
  open: boolean;
  handleClose: () => void;
  type: IDataContent["type"];
  ranges: IRange;
  valueRadio: IValueRadio;
  idBtnClicked: IBtnClicked;
  setRange: Dispatch<SetStateAction<IRange>>;
  setIdBtnClicked: Dispatch<SetStateAction<IBtnClicked>>;
  setValueRadio: Dispatch<SetStateAction<IValueRadio>>;
}

interface IObjKeyString {
  [key: string]: IDataContent;
}

type TFind = Category | undefined;

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
};
const ModalSearch = ({
  open,
  handleClose,
  type,
  ranges,
  valueRadio,
  idBtnClicked,
  setRange,
  setIdBtnClicked,
  setValueRadio,
}: ModalSearchProps) => {
  const { listPrice, listAcreage } = useAppSelector((state) => state.filter);
  const listCategory = useAppSelector((state) => state.app.categories);
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (event: Event, newValue: number | number[]) => {
    setRange((prev) => ({ ...prev, [type]: newValue }));
  };

  const getTextRange = () => {
    const rangeFirst = ranges?.[type]?.[0] || 0;
    const rangeEnd = ranges?.[type]?.[1] || 0;
    if (type === "price") {
      return (
        <>{`${roundHalf(convert100PercentTo15(rangeFirst))} - ${roundHalf(
          convert100PercentTo15(rangeEnd)
        )} trieu`}</>
      );
    }
    return (
      <>{`${convert100PercentTo90(rangeFirst)} - ${convert100PercentTo90(
        rangeEnd
      )} m2`}</>
    );
  };

  const getTitle = (): IObjKeyString => {
    return {
      category: {
        title: "CHỌN LOẠI BẤT ĐỘNG SẢN",
        type: "category",
        data: listCategory,
      },
      province: { title: "CHỌN TỈNH THÀNH", type: "province", data: [] },
      price: { title: "CHỌN GIÁ", type: "price", data: listPrice },
      acreage: { title: "CHỌN DIỆN TÍCH", type: "acreage", data: listAcreage },
    };
  };

  const dataContent = getTitle()[type];

  const handleSubmit = (valRadio?: number | string) => {
    let objSearch:
      | {
          minPrice?: string;
          maxPrice?: string;
        }
      | {
          minAcreage?: string;
          maxAcreage?: string;
        }
      | { province: string } = {};
    let pathName;

    if (type === "category") {
      const result: TFind = listCategory.find(
        (item) => item.id === Number(valRadio)
      );
      pathName = slug(result?.value ?? "");
    }

    if (type === "province") {
      objSearch = { province: valueRadio?.[type] || "" };
    }

    if (type === "price") {
      const range1 = ranges?.[type]?.[0] || 0;
      const range2 = ranges?.[type]?.[1] || 0;
      objSearch = {
        minPrice: numToMillion(
          roundHalf(convert100PercentTo15(range1))
        ).toString(),
        maxPrice: numToMillion(
          roundHalf(convert100PercentTo15(range2))
        ).toString(),
      };
      if (range1 <= 0) delete objSearch?.maxPrice;
    }

    if (type === "acreage") {
      const range1 = ranges?.[type]?.[0] || 0;
      const range2 = ranges?.[type]?.[1] || 0;
      objSearch = {
        minAcreage: convert100PercentTo90(range1).toString(),
        maxAcreage: convert100PercentTo90(range2).toString(),
      };
      if (range1 <= 0) delete objSearch?.minAcreage;
    }

    const paramSearch = createSearchParams(objSearch).toString();

    navigate({
      pathname: pathName ? pathName : location.pathname,
      search: paramSearch,
    });

    handleClose && handleClose();
  };

  return (
    <Modal open={open} onClose={() => handleClose()}>
      <Box sx={{ ...style }}>
        <Box
          display={"flex"}
          alignItems={"center"}
          borderBottom={"1px solid gray"}
          paddingBottom={1}
        >
          <IconButton color="inherit" onClick={() => handleClose()}>
            <WestIcon />
          </IconButton>

          <Typography color="inherit" flexGrow={1} textAlign={"center"}>
            {dataContent.title}
          </Typography>
        </Box>
        {dataContent.type === "category" && (
          <Box padding={1}>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={valueRadio?.[type]}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const valueR = e.target.value;
                setValueRadio((prev) => ({ ...prev, [type]: valueR }));
                handleSubmit(valueR);
              }}
            >
              {dataContent.data.map((item) => {
                return (
                  <FormControlLabel
                    value={item.id}
                    control={<Radio />}
                    label={item.value}
                  />
                );
              })}
            </RadioGroup>
          </Box>
        )}
        {(type === "price" || type === "acreage") && (
          <Box padding={1}>
            <Typography fontWeight={600} color={"orange"} textAlign={"center"}>
              {getTextRange()}
            </Typography>
            <Box sx={{ width: 400, margin: [0, "auto"] }}>
              <Slider
                sx={{
                  "& .MuiSlider-track": {
                    background: "red",
                  },
                  "& .MuiSlider-thumb": {
                    padding: 2,
                    background: grey[400],
                  },
                }}
                value={ranges?.[type] || []}
                min={0}
                max={100}
                step={1}
                onChange={handleChange}
                valueLabelDisplay="auto"
              />
            </Box>
            <Box
              sx={{ width: 460, margin: [0, "auto"] }}
              display={"flex"}
              justifyContent={"space-between"}
            >
              <Button
                variant="text"
                color="inherit"
                onClick={() =>
                  setRange((prev) => ({
                    ...prev,
                    [type]: [0, ranges?.[type]?.[1] || 0],
                  }))
                }
              >
                0
              </Button>
              <Button
                variant="text"
                color="inherit"
                onClick={() =>
                  setRange((prev) => ({
                    ...prev,
                    [type]: [ranges?.[type]?.[0] || 0, 100],
                  }))
                }
              >
                {dataContent.type === "price" ? "15 trieu" : "90m2"}
              </Button>
            </Box>
            <Typography marginBottom={2} fontWeight={600}>
              Chon nhanh
            </Typography>
            <Box
              display={"flex"}
              alignItems={"center"}
              gap={2}
              flexWrap={"wrap"}
              marginBottom={2}
            >
              {dataContent.data.map((item) => {
                return (
                  <Button
                    disableRipple
                    key={item.id}
                    onClick={() => {
                      const arrNum: number[] = [];
                      for (let [keyO, value] of Object.entries(item)) {
                        const listKey = [
                          "minPrice",
                          "maxPrice",
                          "minAcreage",
                          "maxAcreage",
                        ];
                        if (listKey.includes(keyO)) {
                          const million = 1000000;
                          const calc =
                            dataContent.type === "price" && value > -1
                              ? value / million
                              : value;
                          arrNum.push(calc);
                        }
                      }
                      const min = arrNum[0] > arrNum[1] ? arrNum[1] : arrNum[0];
                      const max = arrNum[0] > arrNum[1] ? arrNum[0] : arrNum[1];
                      const target = dataContent.type === "price" ? 15 : 90;

                      const range1 =
                        min > -1 ? convertTargetTo100Percent(min, target) : 0;
                      const range2 =
                        max > -1 ? convertTargetTo100Percent(max, target) : 100;

                      setRange((prev) => ({
                        ...prev,
                        [type]: [range1, range2],
                      }));
                      setIdBtnClicked((prev) => ({ ...prev, [type]: item.id }));
                    }}
                    sx={{
                      "&:hover": {
                        backgroundColor: `${
                          idBtnClicked?.[type] === item.id ? "blue" : grey[200]
                        }`,
                      },
                      backgroundColor: `${
                        idBtnClicked?.[type] === item.id ? "blue" : grey[200]
                      }`,
                      color: "black",
                    }}
                  >
                    {item.value}
                  </Button>
                );
              })}
            </Box>
            <Button
              fullWidth
              variant="contained"
              onClick={() => handleSubmit()}
            >
              Ap dung
            </Button>
          </Box>
        )}
      </Box>
    </Modal>
  );
};

export default ModalSearch;
