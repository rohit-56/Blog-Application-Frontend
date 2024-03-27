import axios from "axios";
import { BASE_URL } from "./AppConstants";

export const createBlog = (postData) => {
  return axios
    .create({
      baseURL: BASE_URL,
    })
    .post(
      `/blog/create/user/${postData.userId}/category/${postData.categoryId}`,
      {
        title: postData.title,
        subtitle: "string",
        tagRequests: [
          {
            tag: "test",
          },
        ],
        body: postData.content,
        imageCover: "string",
      },
      {
        headers: {
          Authorization: `Bearer ${postData.token}`,
        },
      }
    )
    .then((response) => response.data);
};
export const getAllBlog = () => {
  return axios
    .create({
      baseURL: BASE_URL,
    })
    .get("/blog/get-all", {
      params: {
        limit: 10,
      },
    })
    .then((response) => response.data);
};
