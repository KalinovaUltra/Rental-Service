import { Link } from "react-router-dom";
import { OffersList } from "../../types/offer";

type NearPlacesProps = {
  offers: OffersList[];
  currentOfferId?: string;
  onCardMouseEnter?: (offerId: string) => void;
  onCardMouseLeave?: () => void;
}

function NearPlaces({ offers, currentOfferId, onCardMouseEnter, onCardMouseLeave }: NearPlacesProps) {

  const nearOffers = offers
    .filter(offer => offer.id !== currentOfferId)
    .slice(0, 3);

  const getRatingWidth = (rating: number) => `${Math.round(rating) * 20}%`;

  if (nearOffers.length === 0) {
    return (
      <div className="near-places__list places__list">
        <div className="near-places__card place-card">
          <p>No other places available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="near-places__list places__list" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', margin: 0, padding: 0 }}>
      {nearOffers.map((offer) => (
        <article 
          key={offer.id} 
          className="near-places__card place-card"
          onMouseEnter={() => onCardMouseEnter?.(offer.id)}
          onMouseLeave={onCardMouseLeave}
          style={{ width: '100%', backgroundColor: '#fff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
        >
          {offer.isPremium && (
            <div className="place-card__mark">
              <span>Premium</span>
            </div>
          )}
          <div className="near-places__image-wrapper place-card__image-wrapper" style={{ margin: 0 }}>
            <Link to={`/offer/${offer.id}`} style={{ textDecoration: 'none' }}>
              <img 
                className="place-card__image" 
                src={offer.previewImage} 
                width="260" 
                height="200" 
                alt="Place image" 
                style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block' }}
              />
            </Link>
          </div>
          <div className="place-card__info" style={{ padding: '15px' }}>
            <div className="place-card__price-wrapper" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <div className="place-card__price">
                <b className="place-card__price-value" style={{ fontSize: '20px', lineHeight: '1.2' }}>&euro;{offer.price}</b>
                <span className="place-card__price-text" style={{ fontSize: '14px', color: '#666' }}>&#47;&nbsp;night</span>
              </div>
              <button 
                className={`place-card__bookmark-button button ${offer.isFavorite ? 'place-card__bookmark-button--active' : ''}`} 
                type="button"
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              >
                <svg className="place-card__bookmark-icon" width="18" height="19">
                  <use href="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">
                  {offer.isFavorite ? 'In bookmarks' : 'To bookmarks'}
                </span>
              </button>
            </div>
            <div className="place-card__rating rating" style={{ marginBottom: '10px' }}>
  <div style={{ display: 'flex', gap: '2px' }}>
    {[1,2,3,4,5].map((star) => (
      <span key={star} style={{ color: star <= Math.round(offer.rating) ? '#ffcc00' : '#e6e6e6', fontSize: '16px' }}>★</span>
    ))}
  </div>
            </div>
            <h2 className="place-card__name" style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '5px' }}>
              <Link to={`/offer/${offer.id}`} style={{ color: '#000', textDecoration: 'none' }}>{offer.title}</Link>
            </h2>
            <p className="place-card__type" style={{ fontSize: '14px', color: '#666', textTransform: 'capitalize' }}>{offer.type}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export { NearPlaces };