import { createAction } from "@reduxjs/toolkit";
import { CityOffer, OffersList, FullOffer } from "../types/offer";
import { AuthorizationStatusType } from "../types/authorization-status";
import { UserData } from "../types/user-data";
import { Review } from "../types/reviews";

export const setUser = createAction<UserData | null>('user/setUser');

const toggleFavorite = createAction<{ offerId: string; status: number }>('offers/toggleFavorite');

const changeCity = createAction('offers/changeCity', (city: CityOffer) => ({
    payload: city
}));

const offersCityList = createAction ('offers/offersCityList', (offers: OffersList[]) => ({ 
    payload: offers
}));

const requireAuthorization = createAction<AuthorizationStatusType>('user/requireAuthorization');

const setError = createAction('setError', (error: string | null) => ({
    payload: error
}));

const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');


const setCurrentOffer = createAction<FullOffer | null>('offer/setCurrentOffer');
const setOfferReviews = createAction<Review[]>('offer/setOfferReviews');
const setNearbyOffers = createAction<OffersList[]>('offer/setNearbyOffers');
const setOfferDataLoadingStatus = createAction<boolean>('offer/setOfferDataLoadingStatus');

export {
    changeCity, 
    offersCityList, 
    requireAuthorization, 
    setError, 
    setOffersDataLoadingStatus,
    setCurrentOffer,
    setOfferReviews,
    setNearbyOffers,
    setOfferDataLoadingStatus,
    toggleFavorite
};