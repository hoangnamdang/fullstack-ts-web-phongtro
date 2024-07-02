import {
  Alert,
  Box,
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PATH } from "../../utils/path";
import { InputAuth } from "../../features/auth/auth.type";
import * as authSlice from "../../features/auth/auth.slice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { hasValue } from "../../utils/validForm";

const initialState: Omit<InputAuth, "name"> = {
  password: "",
  phone: "",
};
const Login = () => {
  const [formData, setFormData] =
    useState<Omit<InputAuth, "name">>(initialState);
  const [error, setError] = useState<Omit<InputAuth, "name">>(initialState);
  const dispatch = useAppDispatch();
  const dataAuth = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (dataAuth.isLoggedIn) {
      navigate("/");
    }
  }, [dataAuth.isLoggedIn, navigate]);
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (!evt) return;
    if (hasValue(evt.target.name)) {
    }
    setFormData((prev) => ({ ...prev, [evt.target.name]: evt.target.value }));
  };
  const handleValidForm = (): boolean => {
    let isValidForm = true;
    if (!hasValue(formData.phone)) {
      isValidForm = false;
      setError((prev) => ({
        ...prev,
        phone: "Số điện thoại không được để trống",
      }));
    }
    if (!hasValue(formData.password)) {
      isValidForm = false;
      setError((prev) => ({
        ...prev,
        password: "Mật khẩu không được để trống",
      }));
    }
    return isValidForm;
  };

  const handleLogin = () => {
    if (handleValidForm()) {
      dispatch(authSlice.login(formData));
    }
  };

  return (
    <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
      <Box
        width={600}
        padding={4}
        sx={[
          {
            bgcolor: "white",
          },
        ]}
        display={"flex"}
        flexDirection={"column"}
        gap={4}
      >
        <Typography fontSize={25} fontWeight={"bold"}>
          Đăng nhập
        </Typography>
        {dataAuth.err === -1 && (
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert variant="filled" severity="warning">
              {dataAuth.msg}
            </Alert>
          </Stack>
        )}
        <TextField
          error={error && !!error["phone"]}
          helperText={error && error["phone"]}
          name="phone"
          type="number"
          label="Số điện thoại"
          variant="outlined"
          value={formData.phone}
          onChange={handleChange}
        />
        <TextField
          error={error && !!error["password"]}
          helperText={error && error["password"]}
          name="password"
          type="password"
          label="Mật khẩu"
          variant="outlined"
          value={formData.password}
          onChange={handleChange}
        />
        <Button variant="contained" onClick={handleLogin}>
          Đăng nhập
        </Button>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Link to={"/"}>Bạn quên mật khẩu?</Link>
          <Link to={`/${PATH.REGISTER}`}>Tạo tài khoản mới</Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
