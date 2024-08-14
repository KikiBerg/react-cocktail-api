import { ReactElement, useState  } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { SearchForm, SearchResults } from "../components";
import { ICocktail, ISearchResult } from "../interfaces";
import '../css/SearchPage.css';


export function SearchPage() : ReactElement {
    const [SearchResults, setSearchResults] = useState<ICocktail[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();
}
