import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/app/app'
import { offers } from './mocks/offers'
import { offersList } from './mocks/offers-list'
import { reviews } from './mocks/reviews'
import { store } from './store' 
import { Provider } from 'react-redux'
import { ErrorMessage } from './components/error-message/error-message'
import { checkAuthAction } from './store/api-action'
import { fetchOffersAction } from './store/api-action'

store.dispatch(checkAuthAction());
store.dispatch(fetchOffersAction());

const root = ReactDOM.createRoot( 
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ErrorMessage/>
            <App 
                offersList={offersList}
                offers={offers}
                reviews={reviews}
            />
        </Provider>
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

