import React from "react";
import ReactPaginate, { ReactPaginateProps } from "react-paginate";

interface PaginationProps extends Omit<ReactPaginateProps, "onPageChange"> {
  onPageChange: (selected: { selected: number }) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  pageCount,
  onPageChange,
  ...rest
}) => {
  return (
    <ReactPaginate
      {...rest}
      breakLabel="..."
      nextLabel="-->"
      onPageChange={onPageChange}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel="<--"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
