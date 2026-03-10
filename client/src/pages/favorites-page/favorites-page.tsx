import { JSX, useEffect } from "react";
import { Logo } from "../../components/logo/logo";
import { FavoritesList } from "../../components/favorite-card-list/favorite-card-list";
import { OffersList } from "../../types/offer";
import { Link, Navigate } from "react-router-dom";
import { AppRoute, AuthorizationStatus } from "../../const";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { getAuthorizationStatus, getUser } from "../../store/selectors";
import { logoutAction } from "../../store/api-action";

type FavoritesPageProps = {
  offersList: OffersList[];
}

function FavoritesPage({offersList}: FavoritesPageProps): JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const user = useAppSelector(getUser);

  const favoriteOffers = offersList.filter(offer => offer.isFavorite);
  const favoriteCount = favoriteOffers.length;

  const handleSignOut = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    dispatch(logoutAction());
  };

  if (authorizationStatus !== AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Main} />;
  }

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
                  <Link to={AppRoute.Favorites} className="header__nav-link header__nav-link--profile">
                    <div 
                      className="header__avatar-wrapper user__avatar-wrapper"
                      style={{ 
                        backgroundImage: user?.avatarUrl ? `url(${user.avatarUrl})` : 'none',
                        borderRadius: '50%' 
                      }}
                    />
                    <span className="header__user-name user__name">
                      {user?.email || 'User'}
                    </span>
                    <span className="header__favorite-count">{favoriteCount}</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <a 
                    className="header__nav-link" 
                    href="#"
                    onClick={handleSignOut}
                  >
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            {favoriteCount > 0 ? (
              <div className="favorites__list">
                <FavoritesList offersList={favoriteOffers} />
              </div>
            ) : (
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">
                  Save properties to narrow down search or plan your future trips.
                </p>
              </div>
            )}
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="Rent service logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

export { FavoritesPage };