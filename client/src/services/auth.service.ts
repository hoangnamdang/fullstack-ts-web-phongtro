import axios from "../axiosConfig"
import { InputAuth } from "../features/auth/auth.type"

export const register = async (params: InputAuth) => {
    const response = await axios.post("/api/v1/auth/register", params)
    return response.data;
}

export const login = async (params: Omit<InputAuth, "name">) => {
    const response = await axios.post("/api/v1/auth/login", params);
    return response.data
}