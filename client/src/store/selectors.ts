import { State } from '../types/state';
import { AuthorizationStatusType } from '../types/authorization-status';
import { UserData } from '../types/user-data';
import { FullOffer, OffersList } from '../types/offer';
import { Review } from '../types/reviews';

export const getAuthorizationStatus = (state: State): AuthorizationStatusType =>
  state.authorizationStatus;

export const getUser = (state: State): UserData | null =>
  state.user;


export const getCurrentOffer = (state: State): FullOffer | null =>
  state.currentOffer;

export const getOfferReviews = (state: State): Review[] =>
  state.offerReviews;

export const getNearbyOffers = (state: State): OffersList[] =>
  state.nearbyOffers;

export const getOfferDataLoadingStatus = (state: State): boolean =>
  state.isOfferDataLoading;