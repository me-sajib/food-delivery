import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { PaginationItem } from './PaginationItem';



function Pagination({ itemsPerPage, data }) {
    const [pageOffset, setPageOffset] = useState(0);

    const endOffset = pageOffset + itemsPerPage;
    const currentItems = data?.slice(pageOffset, endOffset);
    const pageCount = Math.ceil(data.length / itemsPerPage);

    const handlePageChange = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setPageOffset(newOffset);
    };

    return (
        <>
            <PaginationItem currentItems={currentItems} />
            <ReactPaginate
                previousLabel="Previous"
                nextLabel="Next"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={2}
                onPageChange={handlePageChange}
                containerClassName="pagination"
                activeClassName="active"
            />
        </>
    );
}

export default Pagination;