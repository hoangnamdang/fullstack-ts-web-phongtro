import axios from "../axiosConfig";

export const getAllPostService = async () => {
  const response = await axios.get("/api/v1/post/all");
  return response.data;
};
