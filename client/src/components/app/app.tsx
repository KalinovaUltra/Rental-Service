import React, { useState } from 'react';
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

type AppProps = {
    offersList: OffersList[];
    offers: FullOffer[];
    reviews: Review[];
}

function App({ offers, offersList, reviews }: AppProps): React.JSX.Element {
    const [hoveredOfferId, setHoveredOfferId] = useState<string | null>(null);

    const handleListItemHover = (offerId: string) => {
        setHoveredOfferId(offerId);
    };

    const hoveredOffer = hoveredOfferId 
        ? offersList.find(offer => offer.id === hoveredOfferId) 
        : null;

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
                    element={<OfferPage offers={offers} reviews={reviews} />}  
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