import { ReactElement, useState, useEffect } from 'react';
import { useParams, useNavigate, NavigateFunction } from 'react-router-dom';
import axios from 'axios';
import { CocktailInfo } from '../components/CocktailInfo';
import { ICocktailDetails } from '../interfaces';
import '../css/CocktailInfoPage.css';

export function CocktailInfoPage(): ReactElement {
    const [cocktail, setCocktail] = useState<ICocktailDetails | null>(null);
    const { id } = useParams<{ id: string }>();
    const navigate: NavigateFunction = useNavigate();
  
    useEffect(() => {
      const fetchCocktailDetails = async () => {
        try {
          const response = await axios.get<{ drinks: ICocktailDetails[] }>(
            `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
          );
          if (response.data.drinks) {
            setCocktail(response.data.drinks[0]);
          } else {
            navigate('/not-found');
          }
        } catch (error) {
          console.error('Error fetching cocktail details:', error);
          navigate('/not-found');
        }
      };
  
      fetchCocktailDetails();
    }, [id, navigate]);
  
    if (!cocktail) {
      return <div>Loading...</div>;
    }
  
    return (
      <div className="cocktail-info-page">
        <CocktailInfo cocktail={cocktail} />
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    );
  }
  
  export default CocktailInfoPage;