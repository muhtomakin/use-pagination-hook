import "../css/pagination.scss";

import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { DOTS } from "../hooks/usePagination";
import { nanoid } from "nanoid";




const Pagination = (props) => {
  const { 
    currentPaginationData,
    pageSize,
    setPageSize,
    PAGE_SIZES,
  } = props;
  console.log(currentPaginationData.paginationRange)
  return (
    <ul
      className="wrapper"
      aria-label="Blog post pagination list"
    >
      {currentPaginationData.currentPage !== 1 &&
        <li className="paginationItem">
          <button
            type="button"
            className="arrowButton left"
            aria-label="Goto previous page"
            onClick={currentPaginationData.prev}
          >
            <ChevronLeftIcon />
          </button>
        </li>
      }

      {currentPaginationData.paginationRange.map((pageNumber) => {
        const key = nanoid();

        if (pageNumber === DOTS) {
          return (
            <li key={key} className="dots">
              &#8230;
            </li>
          );
        }

        return (
          <li
            key={key}
            className="paginationItem"
            aria-current="false"
          >
            <button
              type="button"
              aria-label={`Goto page ${pageNumber}`}
              onClick={() => currentPaginationData.jump(pageNumber)}
            >
              {pageNumber}
            </button>
          </li>
        );
      })}

      {currentPaginationData.currentPage !== currentPaginationData.maxPage &&
        <li className="paginationItem">
          <button
            type="button"
            className="arrowButton right"
            aria-label="Goto next page"
            onClick={currentPaginationData.next}
          >
            <ChevronRightIcon />
          </button>
        </li>
      }

      <select
        className="paginationSelector"
        aria-label="Select page size"
        value={pageSize}
        onChange={(e) => {
          setPageSize(e.target.value);
        }}
      >
        {PAGE_SIZES.map((size) => (
          <option key={size} defaultValue={pageSize === size} value={size}>
            {size} per page
          </option>
        ))}
      </select>
    </ul>
  )
}

export default Pagination
