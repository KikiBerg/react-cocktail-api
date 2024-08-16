import React, { ReactElement, useState, useEffect } from 'react';
import axios from 'axios';
import { ISearchFormProps, ISearchParams } from '../interfaces';
import '../css/SearchPage.css';

export function SearchForm({ onSearch }: ISearchFormProps): ReactElement {
  const [searchParams, setSearchParams] = useState<ISearchParams>({});
  const [categories, setCategories] = useState<string[]>([]);
  const [glassTypes, setGlassTypes] = useState<string[]>([]);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const [categoriesResponse, glassesResponse] = await Promise.all([
          axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'),
          axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list')
        ]);
        setCategories(categoriesResponse.data.drinks.map((item: any) => item.strCategory));
        setGlassTypes(glassesResponse.data.drinks.map((item: any) => item.strGlass));
      } catch (error) {
        console.error('Error fetching options:', error);
      }
    };
    fetchOptions();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(searchParams).some(value => value)) {
      onSearch(searchParams);
    } else {
      alert('Please enter at least one search parameter');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={searchParams.name || ''}
        onChange={handleInputChange}
        placeholder="Cocktail name"
      />
      <select name="category" value={searchParams.category || ''} onChange={handleInputChange}>
        <option value="">Select Category</option>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
      <input
        type="text"
        name="ingredient"
        value={searchParams.ingredient || ''}
        onChange={handleInputChange}
        placeholder="Ingredient"
      />
      <select name="glass" value={searchParams.glass || ''} onChange={handleInputChange}>
        <option value="">Select Glass Type</option>
        {glassTypes.map(glass => (
          <option key={glass} value={glass}>{glass}</option>
        ))}
      </select>      
      <div className="button-container">
        <button type="submit">Search</button>
      </div>
    </form>
  );
}
