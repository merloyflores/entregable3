import React from 'react'
import { numbersPage } from '../utils/handlePagination'
import "./styles/Pagination.css"

  const Pagination = ({setPage, RESIDENT_PERPAGE, location}) => {
    return (
      <ul className='pagination'>
          {
              numbersPage(location, RESIDENT_PERPAGE).map(
                  numberPage => 
                    <li onClick={() => setPage(numberPage)} key={numberPage}> 
                      {numberPage}
                    </li>
                )
          }
      </ul>
    )
}

export default Pagination
