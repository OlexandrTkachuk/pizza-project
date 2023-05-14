import { PaginationWrapper } from './Pagination.styled';

const Pagination = ({ onPage, pageCount }) => {
  return (
    <>
      <PaginationWrapper
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        onPageChange={event => onPage(event.selected)}
        pageRangeDisplayed={6}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Pagination;
