import { ReactElement } from 'react';
import { ICocktailDetails, ICocktailInfoProps } from '../interfaces';
import '../css/CocktailInfoPage.css';

export function CocktailInfo({ cocktail }: ICocktailInfoProps): ReactElement {
  const getIngredients = () => {
    const ingredients = [];
    for (let i = 1; i <= 15; i++) {
      const ingredient =
        cocktail[`strIngredient${i}` as keyof ICocktailDetails];
      const measure = cocktail[`strMeasure${i}` as keyof ICocktailDetails];
      if (ingredient) {
        ingredients.push(`${measure || ''} ${ingredient}`.trim());
      }
    }
    return ingredients;
  };

  return (
    <div className="cocktail-info">
      <h2>{cocktail.strDrink}</h2>
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
      <p>
        <strong>Category:</strong> {cocktail.strCategory}
      </p>
      {cocktail.strTags && (
        <p>
          <strong>Tags:</strong> {cocktail.strTags}
        </p>
      )}
      <p>
        <strong>Glass:</strong> {cocktail.strGlass}
      </p>
      <h3>Ingredients:</h3>
      <ul>
        {getIngredients().map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}
