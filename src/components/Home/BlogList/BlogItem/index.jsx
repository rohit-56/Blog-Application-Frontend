import React from "react";
import Chip from "../../../common/Chip";
import { Link } from "react-router-dom";
import "./styles.css";

const BlogItem = ({
  blog: {
    id,
    title,
    category,
    subCategory,
    content,
    authorName,
    authorAvatar,
    createdAt,
    cover,
    defaultDataflag,
  },
}) => {
  return (
    <div className="blogItem-wrap shadow p-3 mb-5 bg-white rounded">
      {defaultDataflag ? (
        <img className="blogItem-cover" src={`${cover}`} alt="cover" />
      ) : (
        <img
          className="blogItem-cover"
          src={`data:image/png;base64,${cover}`}
          alt="cover"
        />
      )}

      <Chip label={category} />
      <h3>{title}</h3>
      <p
        className="blogItem-desc"
        dangerouslySetInnerHTML={{ __html: content }}
      ></p>
      <footer style={{ borderTop: "1px solid grey", padding: "1px" }}>
        <div className="blogItem-author mt-1">
          <img src="/assets/images/author.jpg" alt="avatar" />
          <div>
            <h6>{authorName}</h6>
            <p>{createdAt}</p>
          </div>
        </div>
        <Link className="blogItem-link" to={`/blog/${id}`}>
          ➝
        </Link>
      </footer>
    </div>
  );
};

export default BlogItem;
