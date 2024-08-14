import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { ICocktail } from '../interfaces';

export function useCocktail() {
  const [cocktail, setCocktail] = useState<ICocktail | null>(null);

  const fetchRandomCocktail = useCallback(async () => {
    try {
      const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
      setCocktail(response.data.drinks[0]);
    } catch (error) {
      console.error('Error fetching random cocktail:', error);
    }
  }, []);

  useEffect(() => {
    fetchRandomCocktail();
  }, [fetchRandomCocktail]);

  return { cocktail, fetchRandomCocktail };
}