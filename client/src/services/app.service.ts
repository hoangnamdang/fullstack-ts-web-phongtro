import axios from "../axiosConfig";

export const getCategory = async () => {
    const response = await axios.get("/api/v1/category/all");
    return response.data
}