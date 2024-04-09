import axios from "axios";
import { BASE_URL } from "./AppConstants";

export const createBlog = (postData, blogCover) => {
  let createBlogRequest = {
    title: postData.title,
    subtitle: "string",
    tagRequests: [
      {
        tag: "test",
      },
    ],
    body: postData.content,
  };

  let formData = new FormData();
  formData.append("blogCover", blogCover);
  formData.append("createBlogRequest", JSON.stringify(createBlogRequest));
  return axios
    .create({
      baseURL: BASE_URL,
      headers: {
        Authorization: `Bearer ${postData.token}`,
        "Content-Type": "multipart/form-data",
      },
    })
    .post(
      `/blog/create/user/${postData.userId}/category/${postData.categoryId}`,
      formData
    )
    .then((response) => response.data);
};
export const getAllBlog = () => {
  return axios
    .create({
      baseURL: BASE_URL,
    })
    .get("/blog/get-all-info", {
      params: {
        limit: 10,
      },
    })
    .then((response) => response.data);
};
