import { FC } from 'react';

interface PaginationProps {
  totalGuests: number;
  guestsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  onGuestsPerPageChange: (guestsPerPage: number) => void;
}

const Pagination: FC<PaginationProps> = ({
  totalGuests,
  guestsPerPage,
  currentPage,
  onPageChange,
  onGuestsPerPageChange,
}) => {
  const totalPages = Math.ceil(totalGuests / guestsPerPage);
  const generatePageNumbers = () => {
    const pages = [];
    const delta = 1;
    for (let i = 1; i <= totalPages; i++) {
      const hasThreeDots = pages[pages.length - 1] === '...';
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - delta && i <= currentPage + delta)
      )
        pages.push(i);
      else if (!hasThreeDots) pages.push('...');
    }
    return pages;
  };
  const pages = generatePageNumbers();

  return (
    <div className="flex space-x-2 justify-between items-center mt-4">
      <div className="flex space-x-2">
        {pages.map((page, index) =>
          typeof page === 'number' ? (
            <button
              key={index}
              onClick={() => onPageChange(page)}
              className={`px-3 py-1 rounded ${
                page === currentPage
                  ? 'bg-primary-700 text-white'
                  : 'bg-primary-200 text-primary-950'
              }`}
            >
              {page}
            </button>
          ) : (
            <span key={index} className="px-3 py-1">
              {page}
            </span>
          )
        )}
      </div>
      <div className="flex items-center ">
        <label htmlFor="guestsPerPage" className="mr-2">
          Items por página:
        </label>
        <select
          id="guestsPerPage"
          value={guestsPerPage}
          onChange={(e) => onGuestsPerPageChange(Number(e.target.value))}
          className="bg-primary-700 bg-opacity-10 border-primary-500 rounded w-20 px-2 py-1 focus:ring-0 focus:border-primary-700"
        >
          {[5, 10, 15, 20].map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Pagination;
