import '../css/Pagination.css'
import React from 'react'

const MAX_ITEMS = 5;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

const Pagination = ({ limit, total, offSet, setOffset })  => {
    const current = offSet ? (offSet / limit) + 1 : 1;
    const pages = Math.ceil(total / limit);
    const first_pages = Math.max(current - MAX_LEFT, 1);
    
    function onPageChage(page) {
        setOffset((page -1) * limit)
    }

    return (
        <div className="pagination">
            <ul className="ul-pagination">
                <li> <button onClick={() => onPageChage(1)} disabled={current === 1}>{'<<'}</button> </li>

                <li> <button onClick={() => onPageChage(current - 1)} disabled={current === 1}>{'<'}</button> </li>

                {Array.from({ length: Math.min(MAX_ITEMS, pages) })
                    .map((_, index) => index + first_pages)
                    .map((page) => (
                        <li key={page}>
                            <button onClick={() => onPageChage(page)}
                                className={page === current ? 'ul-pagination__item--active' : null}>
                                {page}
                            </button>
                        </li>
                    ))}

                <li> <button onClick={() => onPageChage(current + 1)} disabled={current === pages}>{'>'}</button> </li> 
                    
                <li> <button onClick={() => onPageChage(pages)} disabled={current === pages}>{'>>'}</button> </li>
            </ul>
         </div>
    )
}

export default Pagination;