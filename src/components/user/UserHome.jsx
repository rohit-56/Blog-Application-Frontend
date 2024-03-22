import React from "react";
import { isLoggedIn } from "../services/loggedIn";
import { Navigate, Outlet } from "react-router-dom";

const UserHome = () => {
  if (isLoggedIn()) {
    return <Outlet />;
  } else return <Navigate to={"/login"} />;
};

export default UserHome;
