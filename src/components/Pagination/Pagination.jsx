import { PaginationWrapper } from './Pagination.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectPageCount } from 'redux/slices/selectors';
import { setPage } from 'redux/slices/filterSlice';

const Pagination = () => {
  const dispatch = useDispatch();
  const pageCount = useSelector(selectPageCount);

  const handlePage = event => {
    dispatch(setPage(event.selected + 1));
    window.scroll(0, 0);
  };

  return (
    <>
      <PaginationWrapper
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        onPageChange={event => handlePage(event)}
        pageRangeDisplayed={6}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Pagination;
