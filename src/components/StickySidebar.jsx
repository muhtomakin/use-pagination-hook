import React from "react";
import blogs from "../data/blogs.json";
import "../css/sidebar.scss";

const exampleFooter = [
  "Help",
  "Status",
  "Writers",
  "Blog",
  "Careers",
  "Privacy",
  "Terms",
  "About",
];

function StickySidebar() {
  return (
    <div className="sidebar">
      <p>discover more of what matters to you</p>
      <div className="tagWrapper">
        {blogs.tags.map((tag) => (
          <div className="tag" key={tag}>
            {tag}
          </div>
        ))}
      </div>
      <div className="tagWrapper">
        {exampleFooter.map((footer) => (
          <a href="/#" key={footer} style={{ color: "black" }}>
            {footer}
          </a>
        ))}
      </div>
    </div>
  );
}

export default StickySidebar;
