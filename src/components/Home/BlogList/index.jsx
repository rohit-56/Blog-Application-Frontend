import React from "react";
import "./styles.css";
import BlogItem from "./BlogItem";

const BlogList = ({ blogs }) => {
  return (
    <div className="blogList-wrap">
      {blogs.map((element) => {
        return <BlogItem blog={element} />;
      })}
    </div>
  );
};

export default BlogList;
