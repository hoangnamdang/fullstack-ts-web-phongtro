import axios from "../axiosConfig"

export const getFilterPrice = async () => {
    const response = await axios.get("/api/v1/filter/price")
    return response;
}

export const getFilterAcreage = async () => {
    const response = await axios.get("/api/v1/filter/acreage")
    return response;
}