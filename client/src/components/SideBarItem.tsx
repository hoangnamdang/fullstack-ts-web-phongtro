import { Box, Button, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import React from "react";
import { IFilterAcreage, IFilterPrice } from "../features/filter/filter.type";
import {
  createSearchParams,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { Category } from "../features/app/app.type";
import { slug } from "../utils/generatePath";
import { pairSearchUrl } from "../utils/constant";
interface IProps {
  data: IFilterPrice[] | IFilterAcreage[] | Category[];
  title: string;
}
type TItem = IFilterPrice | IFilterAcreage | Category;

interface EmptyObject {
  [key: string]: number | undefined;
}

const SideBarItem = ({ data, title }: IProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const getParamPrice = (item: IFilterPrice) => {
    if (item.maxPrice === -1) {
      return {
        minPrice: item.minPrice,
      };
    }
    if (item.minPrice === -1) {
      return {
        maxPrice: item.maxPrice,
      };
    }
    return {
      minPrice: item.minPrice,
      maxPrice: item.maxPrice,
    };
  };

  const getParamAcreage = (item: IFilterAcreage) => {
    if (item.maxAcreage === -1) {
      return {
        minAcreage: item.minAcreage,
      };
    }
    if (item.minAcreage === -1) {
      return {
        maxAcreage: item.maxAcreage,
      };
    }
    return {
      minAcreage: item.minAcreage,
      maxAcreage: item.maxAcreage,
    };
  };

  const getParamsUrl = (item: TItem) => {
    if ("minPrice" in item) {
      return getParamPrice(item);
    }
    if ("minAcreage" in item) {
      return getParamAcreage(item);
    }
  };

  const handleClickFilter = (item: TItem) => {
    if ("header" in item) {
      const pathUrl = slug(item.value);
      navigate({ pathname: pathUrl, search: location.search });
    } else {
      const newSearchParams: EmptyObject = getParamsUrl(item) || {};
      for (let key of Object.keys(newSearchParams)) {
        if (searchParams.has(key) && pairSearchUrl.has(key)) {
          searchParams.delete(key);
          searchParams.delete(pairSearchUrl.get(key) || "");
        }
        searchParams.append(key, newSearchParams[key]?.toString() || "");
      }
      navigate({
        pathname: location.pathname,
        search: createSearchParams(searchParams)?.toString(),
      });
    }
  };

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
      <Typography sx={{ fontWeight: "bold" }}>{title}</Typography>
      <Box display={"flex"} flexWrap={"wrap"}>
        {data.map((d) => {
          return (
            <Button
              key={d.id}
              variant="text"
              size="small"
              color="inherit"
              sx={{
                padding: 0,
                fontSize: 14,
                textTransform: "inherit",
                justifyContent: "flex-start",
                flexBasis: "50%",
                flexGrow: 0,
                "&.MuiButton-root:hover": {
                  bgcolor: "transparent",
                  color: "orange",
                },
              }}
              disableRipple
              startIcon={<ChevronRightIcon />}
              onClick={() => handleClickFilter(d)}
            >
              {d.value}
            </Button>
          );
        })}
      </Box>
    </Box>
  );
};

export default SideBarItem;
