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
  onSearch: (params: ISearchParams) => void;
}

export interface ICocktailDetails extends ICocktail {
  strCategory: string;
  strTags: string | null;
  strGlass: string;
  [key: string]: string | null; 
}

export interface ICocktailInfoProps {
  cocktail: ICocktailDetails;
}

export interface ISearchParams {
  name?: string;
  category?: string;
  ingredient?: string;
  glass?: string;
}

