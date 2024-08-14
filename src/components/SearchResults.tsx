import { ReactElement } from 'react';
import { ISearchResultsProps } from '../interfaces';
import '../css/SearchPage.css';

export function SearchResults({
  results,
  currentPage,
  onPageChange,
  onCocktailSelect,
}: ISearchResultsProps): ReactElement {
  const itemsPerPage = 10;
  const totalPages = Math.ceil(results.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentResults = results.slice(startIndex, endIndex);

  return (
    <div className="search-results">
      <ul>
        {currentResults.map((cocktail) => (
          <li
            key={cocktail.idDrink}
            onClick={() => onCocktailSelect(cocktail.idDrink)}
          >
            {cocktail.strDrink}
          </li>
        ))}
      </ul>
      {totalPages > 1 && (
        <div className="pagination-container">
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => onPageChange(page)}
                className={currentPage === page ? 'active' : 'inactive'}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
