import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import Login from "./components/Login";
import Signup from "./components/Signup";
import UserHome from "./components/user/UserHome";
import Home from "./pages/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/blog/:id" element={<Blog />} />

      <Route path="/user" element={<UserHome />}>
        <Route path="dashboard" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
