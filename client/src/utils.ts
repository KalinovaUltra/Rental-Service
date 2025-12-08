import { CityOffer, OffersList } from "./types/offer";
import { SortOffer } from "./types/sort";
import { SortOffersType } from "./const";


export function getCity(cityName: string, cities: CityOffer[]): CityOffer {
  const foundCity = cities.find(city => city.name === cityName);
  
  if (!foundCity) {

    return {
      name: cityName,
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    };
  }
  
  return foundCity;
}


export function filterOffersByCity(offers: OffersList[], cityName: string): OffersList[] {
  return offers.filter(offer => offer.city.name === cityName);
}

export function getUniqueCities(offers: OffersList[]): string[] {
  const cityNames = offers.map(offer => offer.city.name);
  return Array.from(new Set(cityNames));
}


export function formatRating(rating: number): string {
  return `${Math.round(rating * 10) / 10}`;
}

export function getRatingWidth(rating: number): string {
  return `${(rating / 5) * 100}%`;
}

export function formatPrice(price: number): string {
  return `€${price}`;
}

export function sortOffersByType (offers: OffersList[], type: SortOffer): OffersList[] {
    switch (type) {
    case SortOffersType.PriceToHigh:
    return offers.sort((a, b) => a.price - b.price);
    case SortOffersType.PriceToLow:
    return offers.sort((a, b) => b.price - a.price);
    case SortOffersType.TopRated:
    return offers.sort((a, b) => b.rating - a.rating);
    default:
    return offers;
}
}