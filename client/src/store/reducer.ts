import { createReducer } from '@reduxjs/toolkit'; 
import {offersList} from '../mocks/offers-list'; 
import { getCity } from '../utils';
import { changeCity, offersCityList, requireAuthorization, setUser } from './action'; 
import {CITIES_LOCATION} from '../const';
import { AuthorizationStatus } from '../const';
import { CityOffer, OffersList } from '../types/offer';
import { AuthorizationStatusType } from '../types/authorization-status';
import { setError } from './action';
import { setOffersDataLoadingStatus } from './action';
import { UserData } from '../types/user-data'; 
import { Review } from '../types/reviews';
import { FullOffer } from '../types/offer';
import { setCurrentOffer, setOfferReviews, setNearbyOffers, setOfferDataLoadingStatus } from './action';

const defaultCity = getCity('Paris', CITIES_LOCATION);

export type InitialState = {
  city: CityOffer | undefined;
  offers: OffersList[];
  authorizationStatus: AuthorizationStatusType;
  user: UserData | null; 
  error: string | null;
  isOffersDataLoading: boolean;
  
  currentOffer: FullOffer | null;
  offerReviews: Review[];
  nearbyOffers: OffersList[];
  isOfferDataLoading: boolean;
}

const initialState: InitialState = {
    city: defaultCity,
    offers: [],
    authorizationStatus: AuthorizationStatus.Unknown,
    user: null, 
    error: null,
    isOffersDataLoading: false,

    

  currentOffer: null,
    offerReviews: [],
    nearbyOffers: [],
    isOfferDataLoading: false,
};

const reducer = createReducer(initialState, (builder) => { 
    builder
        .addCase(changeCity, (state, action) => { 
            state.city = action.payload;
        })
        .addCase(offersCityList, (state, action) => { 
            state.offers = action.payload;
        })
        .addCase(requireAuthorization, (state, action) => {
            state.authorizationStatus = action.payload;
        })
        .addCase(setUser, (state, action) => { 
            state.user = action.payload;
        })
        .addCase(setError, (state, action) => {
            state.error = action.payload;
        })
        .addCase(setOffersDataLoadingStatus, (state, action) => {
           state.isOffersDataLoading = action.payload;
         })



         .addCase(setCurrentOffer, (state, action) => {
            state.currentOffer = action.payload;
        })
        .addCase(setOfferReviews, (state, action) => {
            state.offerReviews = action.payload;
        })
        .addCase(setNearbyOffers, (state, action) => {
            state.nearbyOffers = action.payload;
        })
        .addCase(setOfferDataLoadingStatus, (state, action) => {
            state.isOfferDataLoading = action.payload;
        });
});

export {reducer};