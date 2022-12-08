import BlogPost from "./BlogPost";
import Pagination from "./Pagination";
import React, { useState } from "react";
import blogs from "../data/blogs.json";
import { useEffect } from "react";

const PAGE_SIZES = [15, 25, 50, 100];
const paginationData = blogs.posts.slice(0, 15);

function BlogList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(15)
  const [currentPaginationData, setCurrentPaginationData] = useState(paginationData)
  const [numberVisited, setNumberVisited] = useState(0)

  const updateRowsPerPage = (e) => { 
    setPageSize(Number(e))
    setCurrentPage(1)
    setCurrentPaginationData(paginationData)
  };

  const updatePage = (pageNumber) => {
    
    setCurrentPage(pageNumber)
    setNumberVisited((pageNumber-1)*pageSize)
  };

  useEffect(() => {
    const newCurrentPaginationData = blogs.posts.slice(numberVisited, numberVisited+pageSize)
    setCurrentPaginationData(newCurrentPaginationData)
  }, [pageSize, currentPage])

  return (
    <div>
      <Pagination
        currentPage={currentPage}
        totalCount={blogs.posts.length}
        pageSize={pageSize}
        pageSizeOptions={PAGE_SIZES}
        onPageChange={updatePage}
        onPageSizeOptionChange={updateRowsPerPage}
      />
      <ul
        // Do not remove the aria-label below, it is used for Hatchways automation.
        aria-label="blog list"
      >
        {currentPaginationData?.map((blog) => (
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
