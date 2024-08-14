import { ReactElement } from "react";
import { ISearchResultsProps } from "../interfaces";
import '../css/SearchPage.css';

export function SearchResults ({ results, currentPage, onPageChange, onCocktailSelect }: ISearchResultsProps) : ReactElement {
    const itemsPerPage = 8;
    const totalPages = Math.ceil(results.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentResults = results.slice(startIndex, endIndex);
}