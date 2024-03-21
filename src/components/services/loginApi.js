import { loginAxios } from "./AppConstants";

export const getTokenFromLoginDetails = (data) => {
  return loginAxios
    .post("/api/auth/login", {
      username: data.email,
      password: data.password,
    })
    .then((response) => response.data);
};
