import { JSX } from "react/jsx-runtime";
import { MainPage } from "../../pages/main-page/main-page";
import { ReactElement } from 'react';

type AppMainPageProps = {
  rentalOffersCount: number;
}

function App({rentalOffersCount}: AppMainPageProps): JSX.Element {
  return (
    <MainPage rentalOffersCount={rentalOffersCount} />
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