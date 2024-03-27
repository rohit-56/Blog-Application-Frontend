import axios from "axios";
import { BASE_URL } from "./AppConstants";

export const getAllCategories = () => {
  return axios
    .create({
      baseURL: BASE_URL,
    })
    .get("/category/get-all")
    .then((response) => response.data);
};
