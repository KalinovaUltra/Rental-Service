import { Link } from "react-router-dom";
import { FullOffer } from "../../types/offer";

type NearPlacesProps = {
  offers: FullOffer[];
  currentOfferId?: string;
  onCardMouseEnter?: (offerId: string) => void;
  onCardMouseLeave?: () => void;
}

function NearPlaces({ offers, currentOfferId, onCardMouseEnter, onCardMouseLeave }: NearPlacesProps) {
  const nearOffers = offers
    .filter(offer => offer.id !== currentOfferId)
    .slice(0, 3);

  const getRatingWidth = (rating: number) => `${(rating / 5) * 100}%`;

  return (
    <>
      {nearOffers.map((offer) => (
        <article 
          key={offer.id} 
          className="near-places__card place-card"
          onMouseEnter={() => onCardMouseEnter?.(offer.id)}
          onMouseLeave={onCardMouseLeave}
        >
          {offer.isPremium && (
            <div className="place-card__mark">
              <span>Premium</span>
            </div>
          )}
          <div className="near-places__image-wrapper place-card__image-wrapper">
            <Link to={`/offer/${offer.id}`}>
              <img 
                className="place-card__image" 
                src={offer.images[0]} 
                width="260" 
                height="200" 
                alt="Place image" 
              />
            </Link>
          </div>
          <div className="place-card__info">
            <div className="place-card__price-wrapper">
              <div className="place-card__price">
                <b className="place-card__price-value">&euro;{offer.price}</b>
                <span className="place-card__price-text">&#47;&nbsp;night</span>
              </div>
              <button 
                className={`place-card__bookmark-button button ${offer.isFavorite ? 'place-card__bookmark-button--active' : ''}`} 
                type="button"
              >
                <svg className="place-card__bookmark-icon" width="18" height="19">
                  <use href="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">
                  {offer.isFavorite ? 'In bookmarks' : 'To bookmarks'}
                </span>
              </button>
            </div>
            <div className="place-card__rating rating">
              <div className="place-card__stars rating__stars">
                <span style={{width: getRatingWidth(offer.rating)}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <h2 className="place-card__name">
              <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
            </h2>
            <p className="place-card__type">{offer.type}</p>
          </div>
        </article>
      ))}
    </>
  );
}

export { NearPlaces };