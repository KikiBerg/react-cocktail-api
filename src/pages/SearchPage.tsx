import { ReactElement, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { SearchForm, SearchResults } from '../components';
import { ICocktail, ISearchResult, ISearchParams } from '../interfaces';
import '../css/SearchPage.css';

export function SearchPage(): ReactElement {
  const [searchResults, setSearchResults] = useState<ICocktail[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const [cache, setCache] = useState<Record<string, ICocktail[]>>({});

  const handleSearch = async (params: ISearchParams) => {
    const cacheKey = JSON.stringify(params);
    if (cache[cacheKey]) {
      setSearchResults(cache[cacheKey]);
      setCurrentPage(1);
      return;
    }

    try {
      let url = 'https://www.thecocktaildb.com/api/json/v1/1/';
      let results: ICocktail[] = [];

      if (params.name) {
        url += `search.php?s=${params.name}`;
      } else if (params.ingredient) {
        url += `filter.php?i=${params.ingredient}`;
      } else if (params.category) {
        url += `filter.php?c=${params.category}`;
      } else if (params.glass) {
        url += `filter.php?g=${params.glass}`;
      }

      const response = await axios.get<ISearchResult>(url);
      results = response.data.drinks || [];

      setSearchResults(results);
      setCache(prev => ({ ...prev, [cacheKey]: results }));
      setCurrentPage(1);
    } catch (error) {
      console.error('Error searching cocktails:', error);
      setSearchResults([]);
    }
  };

  const handleCocktailSelect = (id: string) => {
    navigate(`/cocktail/${id}`);
  };

  return (
    <div className="search-page">
      <h1>Search Cocktails</h1>
      <SearchForm onSearch={handleSearch} />
      <SearchResults
        results={searchResults}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        onCocktailSelect={handleCocktailSelect}
      />
    </div>
  );
}

export default SearchPage;
