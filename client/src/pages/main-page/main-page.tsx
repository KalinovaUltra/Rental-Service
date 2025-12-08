import { JSX, useState } from "react";
import { Logo } from "../../components/logo/logo";
import { CitiesCardList } from "../../components/cities-card-list/cities-card-list";
import { AppRoute } from "../../const";
import { Link } from "react-router-dom";
import Map from "../../components/map/map"; 
import { useAppSelector } from "../../hooks";
import { filterOffersByCity } from "../../utils";
import { OffersList } from "../../types/offer";
import { CitiesList } from "../../components/cities-list/cities-list";
import { SortOptions } from "../../components/sort-options/sort-options";
import { SortOffer } from "../../types/sort";
import { SortOffersType } from "../../const";
import { sortOffersByType } from "../../utils";

type MainPageProps = {
    onListItemHover?: (offerId: string) => void;
    selectedOffer?: OffersList | null;
}

function MainPage({ onListItemHover, selectedOffer }: MainPageProps): JSX.Element {
    const selectedCity = useAppSelector((state) => state.city);
    const offersList = useAppSelector((state) => state.offers);

    const selectedCityOffers = filterOffersByCity(offersList, selectedCity?.name || 'Paris');
    const rentalOffersCount = selectedCityOffers.length;

    const handleCardMouseEnter = (offerId: string) => {
        if (onListItemHover) {
            onListItemHover(offerId);
        }
    };

    const handleCardMouseLeave = () => {
        if (onListItemHover) {
            onListItemHover('');
        }
    };

    const [activeSort, setActiveSort] = useState<SortOffer>('Popular');

    const sortedOffers = sortOffersByType(selectedCityOffers, activeSort);

    return (
        <div className="page page--gray page--main">
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
                                        <div className="header__avatar-wrapper user__avatar-wrapper">
                                        </div>
                                        <span className="header__user-name user__name">Myemail@gmail.com</span>
                                        <span className="header__favorite-count">3</span>
                                    </Link>
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

            <main className="page__main page__main--index">
                <h1 className="visually-hidden">Cities</h1>
                <div className="tabs">
                    <section className="locations container">
                        <CitiesList selectedCity={selectedCity} />
                    </section>
                </div>
                <div className="cities">
                    <div className="cities__places-container container">
                        <section className="cities__places places">
                            <h2 className="visually-hidden">Places</h2>
                            <b className="places__found">{rentalOffersCount} places to stay in {selectedCity?.name}</b>

                            <SortOptions 
                                activeSorting={activeSort} 
                                onChange={(newSorting) => setActiveSort(newSorting)}
                            />
                            
                            <div className="cities__places-list places__list tabs__content">
                                <CitiesCardList 
                                    offersList={sortedOffers} 
                                    onListItemHover={handleCardMouseEnter}
                                />
                            </div>
                        </section>
                        <div className="cities__right-section">
                            <Map 
                                city={selectedCity}
                                offers={selectedCityOffers}
                                selectedOffer={selectedOffer}
                                className="cities__map"
                            />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export { MainPage };