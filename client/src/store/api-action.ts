import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import { OffersList, FullOffer } from '../types/offer.js';
import { Review } from '../types/reviews.js';
import {offersCityList, requireAuthorization} from './action';
import {saveToken, dropToken} from '../services/token';
import {APIRoute, AuthorizationStatus} from '../const';
import {AuthData, UserData} from '../types/user-data';
import { TIMEOUT_SHOW_ERROR } from '../const';
import { setError } from './action';
import { store } from './index.js'; 
import { setOffersDataLoadingStatus } from './action';
import { setUser, setCurrentOffer, setOfferReviews, setNearbyOffers, setOfferDataLoadingStatus } from './action';

const fetchOffersAction = createAsyncThunk<void, undefined, {
 dispatch: AppDispatch;
 state: State;
 extra: AxiosInstance;
}>(
 'data/fetchOffers',
 async (_arg, {dispatch, extra: api}) => {
  dispatch(setOffersDataLoadingStatus(true));
   const {data} = await api.get<OffersList[]>(APIRoute.Offers);
   dispatch(setOffersDataLoadingStatus(false));
   dispatch(offersCityList(data));
 },
);


const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      
      const { data } = await api.get<UserData>(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(setUser(data));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
      dispatch(setUser(null));
    }
  },
);


const loginAction = createAsyncThunk<
  UserData,       
  AuthData,       
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>(
  'user/login',
  async ({ email, password }, { dispatch, extra: api, rejectWithValue }) => {
    try {
      
      const loginResponse = await api.post<{ token: string }>(APIRoute.Login, { email, password });
      const token = loginResponse.data.token;
      saveToken(token);
      
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      
      
      const userResponse = await api.get<UserData>(APIRoute.Login);
      const userData = userResponse.data;
      
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(setUser(userData));
      return userData;
    } catch (err) {
      console.error('Login error:', err);
      dropToken();
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
      dispatch(setUser(null));
      return rejectWithValue('Login failed');
    }
  }
);

const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    dispatch(setUser(null)); 
  },
);

const clearErrorAction = createAsyncThunk(
   'clearError',
   () => {
     setTimeout(
       () => store.dispatch(setError(null)),
       TIMEOUT_SHOW_ERROR,
     );
   },
 );

export const fetchOfferAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offer/fetchOffer',
  async (offerId, { dispatch, extra: api }) => {
    try {
      dispatch(setOfferDataLoadingStatus(true));
      
      
      const { data: offerData } = await api.get<FullOffer>(`${APIRoute.Offers}/${offerId}`);
      dispatch(setCurrentOffer(offerData));
      
      
      const { data: commentsData } = await api.get<Review[]>(`${APIRoute.Comments}/${offerId}`);
      dispatch(setOfferReviews(commentsData));
      
      
      const { data: allOffers } = await api.get<OffersList[]>(APIRoute.Offers);
      const nearbyOffers = allOffers
        .filter(item => item.id !== offerId && item.city.name === offerData.city.name)
        .slice(0, 3);
      dispatch(setNearbyOffers(nearbyOffers));
      
      dispatch(setOfferDataLoadingStatus(false));
    } catch (error) {
      console.error('Error fetching offer:', error);
      dispatch(setCurrentOffer(null));
      dispatch(setOfferReviews([]));
      dispatch(setNearbyOffers([]));
      dispatch(setOfferDataLoadingStatus(false));
    }
  }
);

export const postReviewAction = createAsyncThunk<void, { 
  offerId: string; 
  comment: string; 
  rating: number 
}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'review/postReview',
  async ({ offerId, comment, rating }, { dispatch, extra: api }) => {
    try {
      await api.post(`${APIRoute.Comments}/${offerId}`, { comment, rating });
      
      
      const { data: commentsData } = await api.get<Review[]>(`${APIRoute.Comments}/${offerId}`);
      dispatch(setOfferReviews(commentsData));
    } catch (error) {
      console.error('Error posting review:', error);
      throw error;
    }
  }
);

export const fetchFavoritesAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'favorites/fetch',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<OffersList[]>(APIRoute.Favorite);
      
      dispatch(updateFavoritesStatus(data));
    } catch (error) {
      console.error('Error fetching favorites:', error);
    }
  }
);

export const toggleFavoriteAction = createAsyncThunk<void, { 
  offerId: string; 
  status: number 
}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'favorites/toggle',
  async ({ offerId, status }, { dispatch, extra: api }) => {
    try {
      await api.post<OffersList>(`${APIRoute.Favorite}/${offerId}/${status}`);
      
      
      const { data } = await api.get<OffersList[]>(APIRoute.Favorite);
      dispatch(updateFavoritesStatus(data));
      
  
      const state = store.getState();
      if (state.currentOffer?.id === offerId) {
        const updatedOffer = { ...state.currentOffer, isFavorite: status === 1 };
        dispatch(setCurrentOffer(updatedOffer as FullOffer));
      }
    } catch (error) {
      console.error('Error toggling favorite:', error);
    }
  }
);


const updateFavoritesStatus = createAsyncThunk<void, OffersList[], {
  dispatch: AppDispatch;
  state: State;
}>(
  'favorites/updateStatus',
  async (favorites, { dispatch, getState }) => {
    const state = getState();
    const currentOffers = state.offers;
    
   
    const updatedOffers = currentOffers.map(offer => ({
      ...offer,
      isFavorite: favorites.some(fav => fav.id === offer.id)
    }));
    
    dispatch(offersCityList(updatedOffers));
  }
);

export {fetchOffersAction, checkAuthAction, loginAction, logoutAction, clearErrorAction}
