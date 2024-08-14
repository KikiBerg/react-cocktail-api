import React, { ReactElement, useState } from 'react';
import { ISearchFormProps } from '../interfaces';

export function SearchForm({ onSearch }: ISearchFormProps): ReactElement {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a cocktail..."
      />
      <button type="submit">Search</button>
    </form>
  );
}
