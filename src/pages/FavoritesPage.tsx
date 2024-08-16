import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { IFavoritesPageProps } from '../interfaces';

export function FavoritesPage({ favorites, removeFavorite }: IFavoritesPageProps): ReactElement {
    return (
      <div className="favorites-page">
        <h1>Favorite Cocktails</h1>
        {favorites.length === 0 ? (
          <p>You haven't added any favorites yet.</p>
        ) : (
          <ul className="favorites-list">
            {favorites.map((favorite) => (
              <li key={favorite.idDrink} className="favorite-item">
                <img src={favorite.strDrinkThumb} alt={favorite.strDrink} />
                <div className="favorite-info">
                  <h3>{favorite.strDrink}</h3>
                  <Link to={`/cocktail/${favorite.idDrink}`}>View Details</Link>
                  <button onClick={() => removeFavorite(favorite.idDrink)}>Remove from Favorites</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }