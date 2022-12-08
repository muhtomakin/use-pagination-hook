import React from 'react';
import { useMemo } from 'react';

export const DOTS = "...";

function usePagination({
  currentPage,
  totalCount,
  pageSize,
}) {
  /*
    Rewrite the logic here to map out the pagination to be displayed

    !!!!!! ATTENTION !!!!!!
    Please replace this comment here with a description of this hook.
    
  */

    const paginationRange = useMemo(() => {

      const totalPageCount = Math.ceil(totalCount/pageSize)

      if (currentPage <= 3) {
        const lastPageItem = totalPageCount
        return [1, 2, 3, DOTS, lastPageItem]
      } else if (currentPage > 3 && currentPage <= totalPageCount-2) {
        const middlePageItem = currentPage
        return [1, DOTS, middlePageItem-1, middlePageItem, middlePageItem+1, DOTS, totalPageCount]
      } else {
        const lastPageItem = totalPageCount
        return [1, DOTS, lastPageItem-2, lastPageItem-1, lastPageItem]
      }
    }, [currentPage, totalCount, pageSize])



  return paginationRange;
}

export default usePagination;
