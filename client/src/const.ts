import { CityOffer } from "./types/offer";

const Settings={
    rentOffersCount: 312,
} as const;

export {Settings};

const AppRoute = {
    Main : '/',
    Login : '/login',
    Favorites : '/favorites',
    Offer : '/offer',
} as const;

export {AppRoute}

const AuthorizationStatus = {
    Auth: 'AUTH',
    NoAuth: 'NO_AUTH',
    Unknown: 'UNKNOWN',
}
export {AuthorizationStatus}

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';


export const CITIES_LOCATION: CityOffer[] = [
  {
    name: 'Paris', 
    location: {
      'latitude': 48.85661,
      'longitude': 2.351499,
      'zoom': 13
    }
  },
  {
    name: 'Cologne',
    location: {
      'latitude': 50.938590,
      'longitude': 6.959922,
      'zoom': 13
    }
  },
  {
    name: 'Brussels',
    location: {
      'latitude': 50.846697,
      'longitude': 4.352544,
      'zoom': 13
    }
  },
  {
    name: 'Amsterdam',
    location: {
      'latitude': 52.373057,
      'longitude': 4.892557,
      'zoom': 13
    }
  },
  {
    name: 'Hamburg',
    location: {
      'latitude': 53.567103,
      'longitude': 9.991934,
      'zoom': 13
    }
  },
  {
    name: 'Dusseldorf',
    location: {
      'latitude': 51.230569,
      'longitude': 6.787428,
      'zoom': 13
    }
  }
];

export const SortOffersType = {
    Popular : 'Popular',
    PriceToHigh : 'Price: low to high',
    PriceToLow : 'Price: high to low',
    TopRated : 'Top rated first',
};