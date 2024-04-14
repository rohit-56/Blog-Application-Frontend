import React, { useEffect, useState } from "react";
import Base from "../Base";
import { Container } from "reactstrap";
import Header from "../../components/Home/Header";
import SearchBar from "../../components/Home/SearchBar";
import BlogList from "../../components/Home/BlogList";
import { blogList } from "../../config/data";
import { getAllBlog } from "../services/post-service";

const Feed = () => {
  useEffect(() => {
    getAllBlog()
      .then((response) => {
        console.log(response);
        setBlogs(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
      <Container>
        {/* Header Component */}
        <Header />

        {/* Blog List Component */}
        <BlogList blogs={blogs} />
      </Container>
    </Base>
  );
};

export default Feed;
