import React from "react";

import Blogs from "../../../data/blogs";
import Blog from "./Blog";

const BlogSection = () => {
  return (
    <section className="section blog-section">
      <div className="container">
        <div className="section-header"></div>
        <div className="section-content blogs">
          {Blogs.map((blog, index) => (
            <Blog key={index} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
