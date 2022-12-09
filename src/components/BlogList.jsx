import BlogPost from "./BlogPost";
import Pagination from "./Pagination";
import React, { useState, useEffect } from "react";
import blogs from "../data/blogs.json";
import usePagination from "../hooks/usePagination";

const PAGE_SIZES = [15, 25, 50, 100];

function BlogList() {
  const [pageSize, setPageSize] = useState(15);
  const currentPaginationData = usePagination(blogs.posts, pageSize);
  console.log(currentPaginationData.currentPage);



  return (
    <div>
      <Pagination 
        currentPaginationData={currentPaginationData}
        pageSize={pageSize}
        setPageSize={setPageSize}
        PAGE_SIZES={PAGE_SIZES}
      />  
      <ul
        aria-label="blog list"
      >
        {currentPaginationData.currentData().map((blog) => (
          <BlogPost
            key={blog.id}
            author={blog.author}
            title={blog.title}
            excerpt={blog.excerpt}
            featureImage={blog.image}
          />
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
