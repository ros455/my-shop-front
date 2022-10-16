import React from 'react'
import pagination from './pagination.css'
export default function Pagination({totalCount,currentPerPage,paginate}) {
    const pageNumber = [];

    for(let i = 1; i <= Math.ceil(totalCount /currentPerPage); i++) {
        pageNumber.push(i)
      }
      
  return (
    <div className="pagination-wrapper">
    {pageNumber.map((num) => (
      <div className="pagination-number-wrapper" key={num} onClick={() => paginate(num)}>
        <p>{num}</p>
      </div>
    ))}
  </div>
  )
}
