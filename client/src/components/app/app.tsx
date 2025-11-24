import { JSX } from "react/jsx-runtime";
import { MainPage } from "../../pages/main-page/main-page";
import { ReactElement } from 'react';
import { AppRoute } from "../../const";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "../../pages/login-page/login-page";
import { FavoritesPage } from "../../pages/favorites-page/favorites-page";
import { OfferPage } from "../../pages/offer-page/offer-page";
import { NotFoundPage } from "../../pages/not-found-page/not-found-page";
import { AuthorizationStatus } from "../../const";
import { PrivateRoute } from "../private-route/private-route";
import { FullOffer, OffersList } from "../../types/offer";

type AppMainPageProps = {
    rentalOffersCount: number;
    offersList: OffersList[];
    offers: FullOffer[];
}

function App({rentalOffersCount, offers, offersList,}: AppMainPageProps): JSX.Element {
  return (
    <BrowserRouter>
    <Routes>
      <Route
      path = {AppRoute.Main}
      element = {<MainPage rentalOffersCount={rentalOffersCount} offersList={offersList}/>}/>
      <Route
      path = {AppRoute.Login}
      element = {<LoginPage />}/>

<Route
  path={AppRoute.Favorites}
  element={
    <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}> 
      <FavoritesPage offersList={offersList}/>
    </PrivateRoute>
  }
/>
      
      <Route path={`${AppRoute.Offer}/:id`} element={<OfferPage offers={offers}/>}  />
      <Route
      path = "*"
      element = {<NotFoundPage />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;



/*import { FavoritesPage } from "../../pages/favorites-page/favorites-page"; //рендер избранного

function App (){
  return(
    <FavoritesPage />
  )
}

export {App};



import { LoginPage } from "../../pages/login-page/login-page"; //рендер Логина

function App (){
  return(
    <LoginPage />
  )
}

export {App};

import { OfferPage } from "../../pages/offer-page/offer-page"; //рендер оффера

function App (){
  return(
    <OfferPage />
  )
}

export {App};

import { NotFoundPage } from "../../pages/not-found-page/not-found-page"; //рендер 404

function App (){
  return(
    <NotFoundPage />
  )
}

export {App};*/