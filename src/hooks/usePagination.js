// import React from 'react';
import { useMemo } from 'react';

export const DOTS = "...";

// function usePagination({
//   currentPage,
//   totalCount,
//   pageSize,
// }) {
//     const paginationRange = useMemo(() => {

//       const totalPageCount = Math.ceil(totalCount/pageSize)

//       if (currentPage <= 3) {
//         const lastPageItem = totalPageCount
//         return [1, 2, 3, DOTS, lastPageItem]
//       } else if (currentPage > 3 && currentPage <= totalPageCount-2) {
//         const middlePageItem = currentPage
//         return [1, DOTS, middlePageItem-1, middlePageItem, middlePageItem+1, DOTS, totalPageCount]
//       } else {
//         const lastPageItem = totalPageCount
//         return [1, DOTS, lastPageItem-2, lastPageItem-1, lastPageItem]
//       }
//     }, [currentPage, totalCount, pageSize])



//   return paginationRange;
// }

// export default usePagination;
import React, { useState, useEffect } from "react";

function usePagination(data, itemsPerPage) {
    const [currentPage, setCurrentPage] = useState(1);
    const maxPage = Math.ceil(data.length / itemsPerPage);

    const currentData = () => {
      const begin = (currentPage - 1) * itemsPerPage;
      const end = begin + itemsPerPage;
      return data.slice(begin, end);
    }

    const next = () => {
      setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
    }

    const prev = () => {
      setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
    }

    const jump = (page) => {
      const pageNumber = Math.max(1, page);
      setCurrentPage(() => Math.min(pageNumber, maxPage));
    }

    const paginationRange = useMemo(() => {      
      if (currentPage < 3) {
        const lastPageItem = maxPage
        return [1, 2, 3, DOTS, lastPageItem]
      } else if (currentPage >= 3 && currentPage <= maxPage-2) {
        const middlePageItem = currentPage
        return [1, DOTS, middlePageItem-1, middlePageItem, middlePageItem+1, DOTS, maxPage]
      } else {
        const lastPageItem = maxPage;
        return [1, DOTS, lastPageItem-2, lastPageItem-1, lastPageItem]
      }
    }, [currentPage, maxPage, itemsPerPage]);

    useEffect(() => {
      currentData();
    }, [itemsPerPage, currentPage])

    return { next, prev, jump, currentData, currentPage, maxPage, paginationRange };
}

export default usePagination;