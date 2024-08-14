export interface ICocktail {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

export interface IRandomCocktailProps {
  cocktail: ICocktail | null;
  onGetRandom: () => void;
}

export interface ISearchResult {
  drinks: ICocktail[];
}

export interface ISearchResultsProps {
  results: ICocktail[];
  currentPage: number;
  onPageChange: (page: number) => void;
  onCocktailSelect: (id: string) => void;
}

export interface ISearchFormProps {
  onSearch: (query: string) => void;
}
