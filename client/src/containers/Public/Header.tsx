import { Box, Button, Typography } from "@mui/material";
import React from "react";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import logo from "../../asset/logo-phongtro.svg";
import { Link } from "react-router-dom";
import { PATH } from "../../utils/path";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { logout } from "../../features/auth/auth.slice";

const Header = () => {
  const dataRegister = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  const styleBtnAction = [
    {
      fontSize: "14px",
      textTransform: "capitalize",
      color: "black",
      "&:hover": {
        bgcolor: "transparent",
        textDecoration: "underline",
      },
      "&:active": {
        bgColor: "blue",
      },
      "& .Mui-focusVisible": {
        bgColor: "red",
      },
    },
  ];

  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Link to={PATH.HOME}>
        <Box component={"img"} src={logo} width={240} height={70} />
      </Link>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={2}
      >
        <Button
          startIcon={<FavoriteBorderRoundedIcon />}
          sx={styleBtnAction}
          color="inherit"
          disableRipple
        >
          Yeu thich
        </Button>
        {!dataRegister.isLoggedIn && (
          <>
            <Link to={PATH.LOGIN}>
              <Button
                startIcon={<PersonAddAltOutlinedIcon />}
                sx={styleBtnAction}
                color="inherit"
                disableRipple
              >
                Dang nhap
              </Button>
            </Link>
            <Link to={PATH.REGISTER}>
              <Button
                startIcon={<ExitToAppOutlinedIcon />}
                sx={styleBtnAction}
                color="inherit"
                disableRipple
              >
                Dang ky
              </Button>
            </Link>
          </>
        )}
        {dataRegister.isLoggedIn && (
          <>
            <Typography>Xin chao user</Typography>
            <Button
              onClick={handleLogout}
              color="inherit"
              disableRipple
              sx={styleBtnAction}
            >
              Logout
            </Button>
          </>
        )}
        <Button
          sx={[
            {
              fontSize: "14px",
              textTransform: "capitalize",
              color: "white",
              bgcolor: "#f73859",
              "&:hover": {
                backgroundColor: "#f73859",
                textDecoration: "underline",
              },
            },
          ]}
          endIcon={<AddCircleOutlineOutlinedIcon />}
        >
          Dang tin mien phi
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
