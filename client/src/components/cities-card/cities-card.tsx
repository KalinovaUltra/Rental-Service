import { Link } from "react-router-dom";
import { AppRoute, AuthorizationStatus } from "../../const";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { toggleFavoriteAction } from "../../store/api-action";
import { getAuthorizationStatus } from "../../store/selectors";

type CitiesCardProps = {
  id: string;
  title: string;
  type: string;
  price: number;
  isPremium: boolean;
  isFavorite: boolean;
  previewImage: string;
  rating: number;
  onMouseEnter?: () => void; 
  onMouseLeave?: () => void; 
}

function CitiesCard({id, title, type, price, isPremium, isFavorite, previewImage, rating, onMouseEnter, onMouseLeave}: CitiesCardProps) {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuth = authorizationStatus === AuthorizationStatus.Auth;

  const handleFavoriteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isAuth) {
      window.location.href = AppRoute.Login;
      return;
    }

    dispatch(toggleFavoriteAction({ 
      offerId: id, 
      status: isFavorite ? 0 : 1 
    }));
  };

  return (
    <article 
      className="cities__card place-card" 
      onMouseEnter={onMouseEnter} 
      onMouseLeave={onMouseLeave} 
    >
      {isPremium && ( 
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Offer}/${id}`}>
          <div 
            className="place-card__image"
            style={{
              width: '260px',
              height: '200px',
              backgroundImage: `url(${previewImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button 
            className={`place-card__bookmark-button button ${isFavorite && isAuth ? 'place-card__bookmark-button--active' : ''}`}
            onClick={handleFavoriteClick}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use href="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">
              {isFavorite && isAuth ? 'In bookmarks' : 'To bookmarks'}
            </span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating * 20}%`}}></span>
            <span className="visually-hidden">Rating: {rating}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${id}`}>{title}</Link> 
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export { CitiesCard };