export interface ICocktail {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

export interface IRandomCocktailProps {
    cocktail: ICocktail | null;
    onGetRandom: () => void;
}