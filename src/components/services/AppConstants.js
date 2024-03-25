import axios from "axios";

export const BASE_URL = "http://localhost:8081";

export const loginAxios = axios.create({
  baseURL: BASE_URL,
});

export const signupAxios = axios.create({
  baseURL: BASE_URL,
});
