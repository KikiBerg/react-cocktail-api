import { ReactElement, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { SearchForm, SearchResults } from '../components';
import { ICocktail, ISearchResult } from '../interfaces';
import '../css/SearchPage.css';

export function SearchPage(): ReactElement {
  const [searchResults, setSearchResults] = useState<ICocktail[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const handleSearch = async (query: string) => {
    try {
      const response = await axios.get<ISearchResult>(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
      );
      setSearchResults(response.data.drinks || []);
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
