// import PropTypes from 'prop-types';

// function Pagination({ itemsPerPage, totalItems, currentPage, paginate }) {
//   const pageNumbers = [];
//   const totalPages = Math.ceil(totalItems / itemsPerPage);
//   const visiblePages = 10; // Number of visible page numbers
//   let startPage, endPage;

//   if (totalPages <= visiblePages) {
//     startPage = 1;
//     endPage = totalPages;
//   } else {
//     const offset = Math.floor(visiblePages / 2);

//     if (currentPage <= offset) {
//       startPage = 1;
//       endPage = visiblePages;
//     } else if (currentPage + offset >= totalPages) {
//       startPage = totalPages - visiblePages + 1;
//       endPage = totalPages;
//     } else {
//       startPage = currentPage - offset;
//       endPage = currentPage + offset;
//     }
//   }

//   for (let i = startPage; i <= endPage; i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <nav className="mt-5">
//       <ul className="flex justify-center space-x-2">
//         {currentPage !== 1 && (
//           <li className="px-2 py-1 bg-gray-300 rounded-md">
//             <a onClick={(e) => { e.preventDefault(); paginate(currentPage - 1); }} href="#">
//               Previous
//             </a>
//           </li>
//         )}

//         {startPage !== 1 && (
//           <li className="px-2 py-1 bg-gray-300 rounded-md">
//             <a onClick={(e) => { e.preventDefault(); paginate(1); }} href="#">
//               1
//             </a>
//           </li>
//         )}

//         {startPage > 2 && <li className="px-2 py-1">...</li>}

//         {pageNumbers.map((number) => (
//           <li key={number} className={`px-2 py-1 ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-300 rounded-md'}`}>
//             <a onClick={(e) => { e.preventDefault(); paginate(number); }} href="#">
//               {number}
//             </a>
//           </li>
//         ))}

//         {endPage < totalPages - 1 && <li className="px-2 py-1">...</li>}

//         {endPage !== totalPages && (
//           <li className="px-2 py-1 bg-gray-300 rounded-md">
//             <a onClick={(e) => { e.preventDefault(); paginate(totalPages); }} href="#">
//               {totalPages}
//             </a>
//           </li>
//         )}

//         {currentPage !== totalPages && (
//           <li className="px-2 py-1 bg-gray-300 rounded-md">
//             <a onClick={(e) => { e.preventDefault(); paginate(currentPage + 1); }} href="#">
//               Next
//             </a>
//           </li>
//         )}
//       </ul>
//     </nav>
//   );
// }

// Pagination.propTypes = {
//   itemsPerPage: PropTypes.number.isRequired,
//   totalItems: PropTypes.number.isRequired,
//   currentPage: PropTypes.number.isRequired,
//   paginate: PropTypes.func.isRequired,
// };

// export default Pagination;



import PropTypes from 'prop-types';

function Pagination({ itemsPerPage, totalItems, currentPage, paginate }) {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const visiblePages = 10; // Number of visible page numbers
  let startPage, endPage;

  if (totalPages <= visiblePages) {
    startPage = 1;
    endPage = totalPages;
  } else {
    const offset = Math.floor(visiblePages / 2);

    if (currentPage <= offset) {
      startPage = 1;
      endPage = visiblePages;
    } else if (currentPage + offset >= totalPages) {
      startPage = totalPages - visiblePages + 1;
      endPage = totalPages;
    } else {
      startPage = currentPage - offset;
      endPage = currentPage + offset;
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="mt-5">
      <ul className="flex justify-center space-x-2">
        {currentPage !== 1 && (
          <>
            <li className="px-2 py-1 bg-gray-300 rounded-md">
              <a onClick={(e) => { e.preventDefault(); paginate(currentPage - 1); }} href="#">
                Previous
              </a>
            </li>
            {startPage !== 1 && (
              <>
                <li className="px-2 py-1 bg-gray-300 rounded-md">
                  <a onClick={(e) => { e.preventDefault(); paginate(1); }} href="#">
                    1
                  </a>
                </li>
                {startPage > 2 && <li className="px-2 py-1">...</li>}
              </>
            )}
          </>
        )}

        {pageNumbers.map((number) => (
          <li key={number} className={`px-2 py-1 ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-300 rounded-md'}`}>
            <a onClick={(e) => { e.preventDefault(); paginate(number); }} href="#">
              {number}
            </a>
          </li>
        ))}

        {endPage < totalPages - 1 && <li className="px-2 py-1">...</li>}

        {endPage !== totalPages && (
          <>
            <li className="px-2 py-1 bg-gray-300 rounded-md">
              <a onClick={(e) => { e.preventDefault(); paginate(totalPages); }} href="#">
                {totalPages}
              </a>
            </li>
            {currentPage !== totalPages && (
              <li className="px-2 py-1 bg-gray-300 rounded-md">
                <a onClick={(e) => { e.preventDefault(); paginate(currentPage + 1); }} href="#">
                  Next
                </a>
              </li>
            )}
          </>
        )}
      </ul>
    </nav>
  );
}

Pagination.propTypes = {
  itemsPerPage: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
};

export default Pagination;
