import { Box, Button, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { PATH } from "../../utils/path";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { useEffect, useState } from "react";
import { InputAuth } from "../../features/auth/auth.type";
import * as authSlice from "../../features/auth/auth.slice";
import { hasValue } from "../../utils/validForm";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
const initialState: InputAuth = {
  name: "",
  password: "",
  phone: "",
};
const Register = () => {
  const [formData, setFormData] = useState<InputAuth>(initialState);
  const [error, setError] = useState<InputAuth>(initialState);
  const dataAuth = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (dataAuth.isLoggedIn) {
      navigate("/");
    }
  }, [dataAuth.isLoggedIn, navigate]);
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    if (!evt) return;
    if (hasValue(evt.target.name)) {
      setError((prev) => ({ ...prev, [evt.target.name]: "" }));
    }
    setFormData((prev) => ({ ...prev, [evt.target.name]: evt.target.value }));
  };

  const handleValidForm = (): boolean => {
    let isValidForm = true;
    if (!hasValue(formData.name)) {
      isValidForm = false;
      setError((prev) => ({ ...prev, name: "Tên không được để trống" }));
    }
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

  const handleRegister = (): void => {
    if (handleValidForm()) dispatch(authSlice.register(formData));
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
          Tạo tài khoản mới
        </Typography>
        {dataAuth.err === -1 && (
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert variant="filled" severity="warning">
              {dataAuth.msg}
            </Alert>
          </Stack>
        )}

        <TextField
          error={error && !!error["name"]}
          helperText={error && error["name"]}
          name="name"
          label="Họ và tên"
          variant="outlined"
          value={formData.name}
          onChange={handleChange}
        />
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
        <Button variant="contained" onClick={handleRegister}>
          Tạo tài khoản
        </Button>
        <Typography>
          Bấm vào nút đăng ký tức là bạn đã đồng ý với quy định sử dụng của
          chúng tôi
        </Typography>
        <Typography>
          Bạn đã có tài khoản? <Link to={`/${PATH.LOGIN}`}>Đăng nhập ngay</Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Register;
