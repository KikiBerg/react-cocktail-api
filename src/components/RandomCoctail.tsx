import { ReactElement } from 'react';
import { IRandomCocktailProps } from '../interfaces';
import '../css/LandingPage.css';

export function RandomCocktail({
  cocktail,
  onGetRandom,
}: IRandomCocktailProps): ReactElement {
  return (
    <div className="random-cocktail">
      {cocktail ? (
        <div className="cocktail-card">
          <h2>{cocktail.strDrink}</h2>
          <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
          <button onClick={onGetRandom}>Get Another Random Cocktail</button>
          <button>See More</button>
        </div>
      ) : (
        <button onClick={onGetRandom}>Get Random Cocktail</button>
      )}
    </div>
  );
}
