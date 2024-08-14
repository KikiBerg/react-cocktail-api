import { ReactElement } from 'react';
import { ICocktailDetails, ICocktailInfoProps } from '../interfaces';
import '../css/CocktailInfoPage.css';

export function CocktailInfo ({ cocktail }: ICocktailInfoProps) : ReactElement
{
    const getIngredients = () => {
        const ingredients = [];
        for (let i = 1; i<= 15; i++) {
            const ingredient = cocktail[`strIngredient${i}` as keyof ICocktailDetails];
            const measure = cocktail [`strMeasure${i}` as keyof ICocktailDetails];
            if (ingredient) {
                ingredients.push(`${measure || ''} ${ingredient}`.trim());
            }
        }
        return ingredients;
    };

    
}