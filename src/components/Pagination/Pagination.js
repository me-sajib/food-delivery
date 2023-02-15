import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Items } from '../../pages/Dashboard/Orders/Orders';
import { ProductItems } from '../../pages/Dashboard/Products/Products';



function Pagination({ itemsPerPage, data }) {

    const [pageOffset, setPageOffset] = useState(0);

    const endOffset = pageOffset + itemsPerPage;
    console.log(`Loading items from ${pageOffset} to ${endOffset}`);
    const currentItems = data?.slice(pageOffset, endOffset);
    const pageCount = Math.ceil(data?.length / itemsPerPage);

    const handlePageChange = (event) => {
        setPageOffset(event.selected);
    };

    return (
        <>
            <Items currentItems={currentItems} key={currentItems.map(item => item.id)} />
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
                pageRangeDisplayed={5}
                onPageChange={handlePageChange}
                containerClassName="pagination"
                activeClassName="active"
            />
        </>
    );
}

export default Pagination;