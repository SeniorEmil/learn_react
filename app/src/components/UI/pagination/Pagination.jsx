import React from 'react';
import PropTypes from 'prop-types';
import { usePagination } from '../../../hooks/usePagination';
import cl from './PaginationModal.module.css'

const Pagination = ({ totalPages, page, changePage }) => {
    let pagesArray = usePagination(totalPages)

    const rootClasses = [cl.page, cl.pageCurrent]

    return (
        <div className={cl.pageWrapper}>
            {pagesArray.map(p =>


                <span
                    onClick={() => changePage(p)}
                    key={p}
                    className={page === p ? rootClasses.join(' ') : cl.page}
                >
                    {p}
                </span>
            )}
        </div>
    );
};

export default Pagination;