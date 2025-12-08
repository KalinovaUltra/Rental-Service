import { JSX, useState } from "react";
import { OfferInside } from "../../components/offer-inside/offer-inside";
import { NearPlaces } from "../../components/near-places/near-places";
import { Logo } from "../../components/logo/logo";
import { FullOffer } from "../../types/offer";
import { Review, User } from "../../types/reviews"; 
import { useParams } from "react-router-dom";
import { NotFoundPage } from "../not-found-page/not-found-page";
import { ReviewsList } from "../../components/review_list/review_list"; 
import Map from "../../components/map/map";
import ReviewForm from "../../components/review-form/review-form";

type OfferProps = {
  offers: FullOffer[];
  reviews: Review[];
}

function OfferPage({ offers, reviews: initialReviews }: OfferProps): JSX.Element {
  const params = useParams();
  const offer = offers.find((item) => item.id === params.id);
  const [hoveredOfferId, setHoveredOfferId] = useState<string | null>(null);
  const [offerReviews, setOfferReviews] = useState<Review[]>(initialReviews);

  const [currentUser] = useState<User>({
    name: 'User1',
    avatarUrl: '/img/image.png',
    isPro: false,
  });
  
  if (!offer) {
    return <NotFoundPage />;
  }

  const getRatingWidth = (rating: number) => `${(rating / 5) * 100}%`;

  const nearbyOffers = offers
    .filter(item => 
      item.id !== offer.id && 
      item.city.name === offer.city.name
    )
    .slice(0, 3);

  const offersForMap = nearbyOffers.map(offerItem => ({
    id: offerItem.id,
    title: offerItem.title,
    type: offerItem.type,
    price: offerItem.price,
    previewImage: offerItem.images[0],
    city: offerItem.city,
    location: offerItem.location,
    isPremium: offerItem.isPremium,
    isFavorite: offerItem.isFavorite,
    rating: offerItem.rating
  }));


  const hoveredOffer = hoveredOfferId 
    ? offersForMap.find(offer => offer.id === hoveredOfferId) 
    : null;

  const handleCardMouseEnter = (offerId: string) => {
    setHoveredOfferId(offerId);
  };

  const handleCardMouseLeave = () => {
    setHoveredOfferId(null);
  };


  const handleReviewSubmit = (reviewData: Omit<Review, 'id' | 'date' | 'user'>) => {
    const newReview: Review = {
      id: `review-${Date.now()}`,
      date: new Date().toISOString(),
      user: currentUser, 
      ...reviewData,
    };


    setOfferReviews(prevReviews => [newReview, ...prevReviews]);
  };

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">{currentUser.name}</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {offer.images.map((item, index) => (
                <div key={`${item}-${index}`} className="offer__image-wrapper">
                  <img className="offer__image" src={item} alt="Photo studio" />
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">             
              {offer.isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {offer.title}
                </h1>
                <button className={`offer__bookmark-button button ${offer.isFavorite ? 'offer__bookmark-button--active' : ''}`} type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use href="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">
                    {offer.isFavorite ? 'In bookmarks' : 'To bookmarks'}
                  </span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: getRatingWidth(offer.rating)}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {offer.type.charAt(0).toUpperCase() + offer.type.slice(1)}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {offer.bedrooms} Bedroom{offer.bedrooms !== 1 ? 's' : ''}
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {offer.maxAdults} adult{offer.maxAdults !== 1 ? 's' : ''}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{offer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>

              <OfferInside names={offer.goods} />

              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className={`offer__avatar-wrapper ${offer.host.isPro ? 'offer__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                    <img 
                      className="offer__avatar user__avatar" 
                      src={offer.host.avatarUrl} 
                      width="74" 
                      height="74" 
                      alt="Host avatar" 
                    />
                  </div>
                  <span className="offer__user-name">
                    {offer.host.name}
                  </span>
                  {offer.host.isPro && (
                    <span className="offer__user-status">
                      Pro
                    </span>
                  )}
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {offer.description}
                  </p>
                </div>
              </div>
              <ReviewsList reviews={offerReviews} />

              <ReviewForm onSubmit={handleReviewSubmit} />
            </div>
          </div>

          <div style={{ maxWidth: '1144px', margin: '0 auto' }}>
            <Map 
              city={offer.city}
              offers={offersForMap}
              selectedOffer={hoveredOffer}
              className="offer__map"
            />
          </div>
        </section>
        
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <NearPlaces 
                offers={offers} 
                currentOfferId={offer.id}
                onCardMouseEnter={handleCardMouseEnter}
                onCardMouseLeave={handleCardMouseLeave}
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export { OfferPage };