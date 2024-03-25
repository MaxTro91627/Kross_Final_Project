import React from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = ({ info, pageNumber, updatePageNumber }) => {
    return (
        <>
            <style jsx> {`
                .pagination > li > a
                {
                    background-color: none;
                    color: black;
                }
                
                .pagination > li > a:focus,
                .pagination > li > a:hover,
                .pagination > li > span:focus,
                .pagination > li > span:hover
                {
                    color: orange;
                    background-color: #eee;
                    border-color: #ddd;
                }

                .pagination > .active > a
                {
                    color: white;
                    background-color: orange;
                    border: solid 1px orange;
                }
                
                .pagination > .active > a:hover
                {
                    background-color: orange;
                    border: solid 1px orange;
                }
                `}
            </style>
            <ReactPaginate
                className='pagination justify-content-center gap-4 my-4'
                nextLabel="NEXT"
                nextClassName='btn btn-primary'
                previousLabel="PREV"
                previousClassName='btn btn-primary'
                pageClassName='page-item'
                pageLinkClassName='page-link'
                activeClassName='active'
                marginPagesDisplayed={2}
                pageRangeDisplayed={2}
                forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
                onPageChange={(data) => { updatePageNumber(data.selected + 1) }}
                pageCount={info?.pages} />
        </>
    )
}

export default Pagination
