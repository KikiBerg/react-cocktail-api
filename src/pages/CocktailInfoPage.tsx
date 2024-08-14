import { ReactElement, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";  
import axios from "axios";
import { CocktailInfo } from '../components/CocktailInfo';
import { ICocktailDetails } from '../interfaces';
import '../css/CocktailInfoPage.css';

export function CocktailInfoPage(): ReactElement {
    const [cocktail, setCocktail] = useState<ICocktailDetails | null>(null);
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate;
}