import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/app/app'
import { Settings } from './const'
import { offers } from './mocks/offers'
import { offersList } from './mocks/offers-list'
import { reviews } from './mocks/reviews'

const root = ReactDOM.createRoot( 
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App 
    rentalOffersCount={Settings.rentOffersCount}
    offersList = {offersList}
    offers = {offers}
    reviews = {reviews}
    />
  </React.StrictMode>
);
 

/*
import React from 'react'; //рендер простых страниц
import { createRoot } from 'react-dom/client';
import { App } from './components/app/app'; 

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/

