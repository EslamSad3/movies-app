import ReactPaginate from 'react-paginate';

function PaginationList({ getPage, pagenumbers }) {
  const handlePageClick = (data) => {
    getPage(data.selected + 1);
  };
  const pageCount = pagenumbers;
  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel="التالي >"
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="< السابق"
        containerClassName={'pagination justify-content-center m-3 p-3'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        nextClassName={'page-item'}
        previousLinkClassName="page-link"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        activeClassName="active"
      />
    </>
  );
}

export default PaginationList;
