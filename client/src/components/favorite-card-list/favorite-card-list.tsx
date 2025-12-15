import { JSX } from "react";
import { FavoritesCard } from "../favorites-card/favorites-card";
import { OffersList } from "../../types/offer";

type FavoritesCardListProps = {
  offersList: OffersList[];
}

function FavoritesList({offersList}: FavoritesCardListProps): JSX.Element {
  const cities = ["Paris", "Cologne", "Brussels", "Amsterdam", "Hamburg", "Dusseldorf"];
  
  return (
    <ul className="favorites__list">
      {cities.map((city) => {
        const cityOffers = offersList.filter(offer => 
          offer.isFavorite && offer.city?.name === city
        );
        
        if (cityOffers.length === 0) {
          return null;
        }
        
        return (
          <li key={city} className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>{city}</span>
                </a>
              </div>
            </div>
            <div className="favorites__places">
              {cityOffers.map((item) => (
                <FavoritesCard 
                  key={item.id} 
                  id={item.id} 
                  title={item.title} 
                  type={item.type} 
                  price={item.price} 
                  previewImage={item.previewImage} 
                  isPremium={item.isPremium}
                  isFavorite={item.isFavorite} 
                  rating={item.rating} 
                />
              ))}
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export { FavoritesList };