import { PaginationWrapper } from './Pagination.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectPage, selectPageCount } from 'redux/slices/selectors';
import { setPage } from 'redux/slices/filterSlice';

const Pagination = () => {
  const dispatch = useDispatch();
  const pageCount = useSelector(selectPageCount);
  const page = useSelector(selectPage);

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
        forcePage={page - 1}
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Pagination;
