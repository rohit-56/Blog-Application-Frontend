import { loginAxios, signupAxios } from "./AppConstants";

export const getTokenFromLoginDetails = (data) => {
  return loginAxios
    .post("/api/auth/login", {
      username: data.email,
      password: data.password,
    })
    .then((response) => response.data);
};

export const registerUser = (data) => {
  return signupAxios
    .post("/api/auth/register", {
      username: data.username,
      password: data.password,
      email: data.email,
      bio: data.about,
    })
    .then((response) => response.data);
};
