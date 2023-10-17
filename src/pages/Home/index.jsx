import React, { useState } from "react";
import Header from "../../components/Home/Header";
import SearchBar from "../../components/Home/SearchBar";
import BlogList from "../../components/Home/BlogList";
import { blogList } from "../../config/data";

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
    <div>
      {/* Header Component */}
      <Header />

      {/* Search Bar Component */}
      <SearchBar
        value={searchKey}
        clearSearch={clearSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
        formSubmit={handleSearchSubmit}
      />

      {/* Blog List Component */}
      <BlogList blogs={blogs} />
    </div>
  );
};

export default Home;
