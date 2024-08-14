import { ReactElement, useState, useEffect } from 'react';
import axios from 'axios';
import { RandomCocktail } from '../components';
import { ICocktail } from '../interfaces';
import '../css/LandingPage.css';

export function LandingPage(): ReactElement {
  const [randomCocktail, setRandomCocktail] = useState<ICocktail | null>(null);

  const fetchRandomCocktail = async () => {
    try {
        const response = await
axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
        setRandomCocktail(response.data.drinks[0]);
    } catch (error) {
        console.error('Error fetching random cocktail: ', error);
    }
  };

  useEffect(() => {
    fetchRandomCocktail();
  }, []);

  return (
    <div className="landing-page">
      <h1>Cocktail Wiki</h1>
      <RandomCocktail cocktail={randomCocktail} onGetRandom={fetchRandomCocktail} />
    </div>
  );
}

export default LandingPage;
