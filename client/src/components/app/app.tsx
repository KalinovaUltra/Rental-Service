import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { OffersList, FullOffer } from '../../types/offer';
import { MainPage } from '../../pages/main-page/main-page';
import { LoginPage } from '../../pages/login-page/login-page';
import { FavoritesPage } from '../../pages/favorites-page/favorites-page';
import { OfferPage } from '../../pages/offer-page/offer-page';
import { NotFoundPage } from '../../pages/not-found-page/not-found-page';
import { PrivateRoute } from '../private-route/private-route';
import { AppRoute, AuthorizationStatus } from '../../const';
import { Review } from '../../types/reviews';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { LoadingPage } from '../loading-page/loading-page';
import { fetchOffersAction, fetchFavoritesAction } from '../../store/api-action';

type AppProps = {
    offersList?: OffersList[]; 
    offers?: FullOffer[];
    reviews?: Review[];
}

function App({ offers: propOffers, offersList: propOffersList, reviews: propReviews }: AppProps): React.JSX.Element {
    const dispatch = useAppDispatch();
    const [hoveredOfferId, setHoveredOfferId] = useState<string | null>(null);

    const storeOffers = useAppSelector((state) => state.offers);
    const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
    const isQuestionsDataLoading = useAppSelector((state) => state.isOffersDataLoading);

    const offersList = storeOffers.length > 0 ? storeOffers : (propOffersList || []);

    useEffect(() => {
        dispatch(fetchOffersAction());
        if (authorizationStatus === AuthorizationStatus.Auth) {
            dispatch(fetchFavoritesAction());
        }
    }, [dispatch, authorizationStatus]);

    const handleListItemHover = (offerId: string) => {
        setHoveredOfferId(offerId);
    };

    const hoveredOffer = hoveredOfferId 
        ? offersList.find(offer => offer.id === hoveredOfferId) 
        : null;

    if (authorizationStatus === AuthorizationStatus.Unknown || isQuestionsDataLoading) {
        return <LoadingPage />;
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path={AppRoute.Main}
                    element={
                        <MainPage 
                            onListItemHover={handleListItemHover}
                            selectedOffer={hoveredOffer} 
                        />
                    }
                />
                <Route
                    path={AppRoute.Login}
                    element={<LoginPage />}
                />
                <Route
                    path={AppRoute.Favorites}
                    element={
                        <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                            <FavoritesPage offersList={offersList}/>
                        </PrivateRoute>
                    }
                />
                <Route 
                    path={`${AppRoute.Offer}/:id`} 
                    element={<OfferPage />} 
                />
                <Route
                    path="*"
                    element={<NotFoundPage />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;