import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import * as appSlice from "../../features/app/app.slice";
import { NavLink } from "react-router-dom";
import { Box } from "@mui/material";
import { slug } from "../../utils/generatePath";
import "./Navigation.scss";
const Navigation = () => {
  const dispatch = useAppDispatch();
  const dataCategory = useAppSelector((state) => state.app.categories);

  useEffect(() => {
    dispatch(appSlice.getCategory());
  }, [dispatch]);

  return (
    <>
      <Box
        bgcolor={"blue"}
        display={"flex"}
        alignContent={"center"}
        gap={3}
        marginBottom={1}
      >
        <ul className="header-list-menu">
          <li className="header-item-menu">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "header-navlink-active header-item-menu-link"
                  : "header-item-menu-link"
              }
              to={"/"}
            >
              Trang chủ
            </NavLink>
          </li>
          {dataCategory.map((d) => {
            return (
              <li key={d.id} className="header-item-menu">
                <NavLink
                  className={({ isActive }) => {
                    return `header-item-menu-link ${
                      isActive ? "header-navlink-active " : ""
                    }`;
                  }}
                  to={slug(d.value)}
                >
                  {d.value}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </Box>
    </>
  );
};

export default Navigation;
