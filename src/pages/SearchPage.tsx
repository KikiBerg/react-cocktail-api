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

    const handleSearch = async (query: string) => {
        try {
            const response = await axios.get<ISearchResult>(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`);
            setSearchResults(response.data.drinks || []);
            setCurrentPage(1);
        } catch (error) {
            console.error ('Error searching cocktails:', error);
            setSearchResults([]);
        }
    };

    
}
