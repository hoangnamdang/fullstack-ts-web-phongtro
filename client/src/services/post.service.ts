import axios from "../axiosConfig";

export const getAllPostService = async () => {
  const response = await axios.get("/api/v1/post/all");
  return response.data;
};
interface IParamsLimit {
  query: object,
  limit: number
}
export const getAllPostByLimitService = async ({query, limit}: IParamsLimit) => {
  const response = await axios.get("/api/v1/post/limit", {params: {...query, limit}});
  return response.data
}