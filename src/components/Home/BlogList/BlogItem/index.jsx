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
  },
}) => {
  return (
    <div className="blogItem-wrap">
      <img
        className="blogItem-cover"
        src={`data:image/png;base64,${cover}`}
        alt="cover"
      />
      <Chip label={category} />
      <h3>{title}</h3>
      <p
        className="blogItem-desc"
        dangerouslySetInnerHTML={{ __html: content }}
      ></p>
      <footer>
        <div className="blogItem-author">
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
