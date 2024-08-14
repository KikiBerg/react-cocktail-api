import { ReactElement } from 'react';
import { RandomCocktail } from '../components';
import { useCocktail } from '../hooks/useCocktail';
import '../css/RandomCocktailPage.css';

export function RandomCocktailPage(): ReactElement {
  const { cocktail, fetchRandomCocktail } = useCocktail();

  return (
    <div className="random-cocktail-page">
      <h2>Random Cocktail</h2>
      <RandomCocktail cocktail={cocktail} onGetRandom={fetchRandomCocktail} />
    </div>
  );
}

export default RandomCocktailPage;