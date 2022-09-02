import React from "react";

import AuthorAvatar from "../../../assets/images/avatars/1.png";

function Blog(blog: any) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={blog.banner} />
      </div>
      <div className="card-content">
        <h2 className="card-title">{blog.title}</h2>
      </div>
      <div className="card-author">
        <img className="card-author-avatar" src={AuthorAvatar} />
        <div className="card-author-info">
          <h5 className="card-author-name">Dasteen</h5>
          <p className="card-author-text">Jan 10, 2022 ∙ 3 min read</p>
        </div>
      </div>
    </div>
  );
}

export default Blog;
