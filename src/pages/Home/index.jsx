import React, { useState } from "react";
import Header from "../../components/Home/Header";
import SearchBar from "../../components/Home/SearchBar";
import BlogList from "../../components/Home/BlogList";
import { blogList } from "../../config/data";
import Base from "../../components/Base";
import { Container } from "reactstrap";
import homeCover from "../../config/homeCover.jpg";

const Home = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState("");

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    handleSearchResults();
  };

  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );

    setBlogs(filteredBlogs);
  };

  const clearSearchBar = () => {
    setBlogs(blogList);
    setSearchKey("");
  };

  return (
    <Base>
      <img
        alt="home-cover"
        src={`${homeCover}`}
        style={{ height: "550px", width: "100%" }}
      />

      <Container>
        {/* Blog List Component */}
        <BlogList blogs={blogs} />
      </Container>
    </Base>
  );
};

export default Home;
