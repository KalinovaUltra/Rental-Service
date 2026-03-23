import { describe, it, expect } from 'vitest';
import { 
  filterOffersByCity, 
  sortOffersByType, 
  getCity, 
  getUniqueCities, 
  formatRating, 
  getRatingWidth, 
  formatPrice 
} from '../utils';
import { makeFakeOffer } from './mocks';
import { SortOffersType, CITIES_LOCATION } from '../const'; 
import { OffersList } from '../types/offer';

describe('filterOffersByCity', () => {
  it('возвращает только объявления указанного города', () => {
    const paris = CITIES_LOCATION[0];
    const cologne = CITIES_LOCATION[1];
    const parisOffer = { ...makeFakeOffer(), city: paris };
    const cologneOffer = { ...makeFakeOffer(), city: cologne };

    const result = filterOffersByCity([parisOffer, cologneOffer], 'Paris');

    expect(result).toHaveLength(1);
    expect(result[0].city.name).toBe('Paris');
  });

  it('возвращает пустой массив, если город не найден', () => {
    const offers = [makeFakeOffer(), makeFakeOffer()];
    expect(filterOffersByCity(offers, 'Tokyo')).toHaveLength(0);
  });

  it('возвращает пустой массив при пустом списке предложений', () => {
    expect(filterOffersByCity([], 'Paris')).toEqual([]);
  });
});

describe('sortOffersByType', () => {
  it('сортирует от дешёвых к дорогим (PriceToHigh)', () => {
    const offers = [
      { ...makeFakeOffer(), price: 300 },
      { ...makeFakeOffer(), price: 100 },
      { ...makeFakeOffer(), price: 200 },
    ];


    const result = sortOffersByType([...offers], SortOffersType.PriceToHigh);

    expect(result[0].price).toBe(100);
    expect(result[1].price).toBe(200);
    expect(result[2].price).toBe(300);
  });

  it('сортирует от дорогих к дешёвым (PriceToLow)', () => {
    const offers = [
      { ...makeFakeOffer(), price: 100 },
      { ...makeFakeOffer(), price: 300 },
      { ...makeFakeOffer(), price: 200 },
    ];

 
    const result = sortOffersByType([...offers], SortOffersType.PriceToLow);

    expect(result[0].price).toBe(300);
    expect(result[1].price).toBe(200);
    expect(result[2].price).toBe(100);
  });

  it('сортирует по рейтингу от высокого к низкому (TopRated)', () => {
    const offers = [
      { ...makeFakeOffer(), rating: 3 },
      { ...makeFakeOffer(), rating: 5 },
      { ...makeFakeOffer(), rating: 4 },
    ];


    const result = sortOffersByType([...offers], SortOffersType.TopRated);

    expect(result[0].rating).toBe(5);
    expect(result[1].rating).toBe(4);
    expect(result[2].rating).toBe(3);
  });

  it('возвращает исходный порядок для Popular', () => {
    const offers = [
      { ...makeFakeOffer(), rating: 3, price: 300 },
      { ...makeFakeOffer(), rating: 5, price: 100 },
      { ...makeFakeOffer(), rating: 4, price: 200 },
    ];

    const originalOrder = [...offers];

    const result = sortOffersByType([...offers], SortOffersType.Popular);

    expect(result[0]).toEqual(originalOrder[0]);
    expect(result[1]).toEqual(originalOrder[1]);
    expect(result[2]).toEqual(originalOrder[2]);
  });

  it('не изменяет исходный массив', () => {
    const offers = [
      { ...makeFakeOffer(), price: 100 },
      { ...makeFakeOffer(), price: 200 },
    ];

    const copy = [...offers];
    sortOffersByType(offers, SortOffersType.PriceToHigh);

    expect(offers).toEqual(copy);
  });

  it('корректно работает при пустом массиве', () => {
    const result = sortOffersByType([], SortOffersType.PriceToHigh);
    expect(result).toEqual([]);
    expect(result).toHaveLength(0);
  });
});

describe('getCity', () => {
  it('возвращает город из списка, если он существует', () => {
    const result = getCity('Paris', CITIES_LOCATION);
    expect(result.name).toBe('Paris');
    expect(result.location.latitude).toBe(48.85661);
  });

  it('возвращает город по умолчанию с координатами Парижа, если город не найден', () => {
    const result = getCity('UnknownCity', CITIES_LOCATION);
    expect(result.name).toBe('UnknownCity');
    expect(result.location.latitude).toBe(48.85661);
    expect(result.location.longitude).toBe(2.351499);
    expect(result.location.zoom).toBe(13);
  });

  it('возвращает правильные координаты для разных городов', () => {
    const cologne = getCity('Cologne', CITIES_LOCATION);
    expect(cologne.name).toBe('Cologne');
    expect(cologne.location.latitude).toBe(50.938590);
    
    const amsterdam = getCity('Amsterdam', CITIES_LOCATION);
    expect(amsterdam.name).toBe('Amsterdam');
    expect(amsterdam.location.latitude).toBe(52.373057);
  });
});

describe('getUniqueCities', () => {
  it('возвращает уникальные названия городов из списка предложений', () => {
    const paris = CITIES_LOCATION[0];
    const cologne = CITIES_LOCATION[1];
    
    const offers = [
      { ...makeFakeOffer(), city: paris },
      { ...makeFakeOffer(), city: cologne },
      { ...makeFakeOffer(), city: paris },
      { ...makeFakeOffer(), city: cologne },
    ];

    const result = getUniqueCities(offers);
    expect(result).toHaveLength(2);
    expect(result).toContain('Paris');
    expect(result).toContain('Cologne');
  });

  it('возвращает пустой массив при пустом списке предложений', () => {
    const result = getUniqueCities([]);
    expect(result).toEqual([]);
  });

  it('возвращает один город, если все предложения из одного города', () => {
    const paris = CITIES_LOCATION[0];
    const offers = [
      { ...makeFakeOffer(), city: paris },
      { ...makeFakeOffer(), city: paris },
    ];

    const result = getUniqueCities(offers);
    expect(result).toHaveLength(1);
    expect(result[0]).toBe('Paris');
  });
});

describe('formatRating', () => {
  it('округляет рейтинг до одного десятичного знака', () => {
    expect(formatRating(4.7)).toBe('4.7');
    expect(formatRating(4.75)).toBe('4.8');
    expect(formatRating(4.73)).toBe('4.7');
  });

  it('корректно форматирует целые числа', () => {
    expect(formatRating(5)).toBe('5');
    expect(formatRating(3)).toBe('3');
  });

  it('корректно обрабатывает 0', () => {
    expect(formatRating(0)).toBe('0');
  });
});

describe('getRatingWidth', () => {
  it('возвращает правильный процент для рейтинга 5', () => {
    expect(getRatingWidth(5)).toBe('100%');
  });

  it('возвращает правильный процент для рейтинга 4', () => {
    expect(getRatingWidth(4)).toBe('80%');
  });

  it('возвращает правильный процент для рейтинга 3', () => {
    expect(getRatingWidth(3)).toBe('60%');
  });

  it('возвращает правильный процент для рейтинга 2.5', () => {
    expect(getRatingWidth(2.5)).toBe('50%');
  });

  it('возвращает 0% для рейтинга 0', () => {
    expect(getRatingWidth(0)).toBe('0%');
  });
});

describe('formatPrice', () => {
  it('добавляет символ евро к цене', () => {
    expect(formatPrice(100)).toBe('€100');
    expect(formatPrice(250)).toBe('€250');
    expect(formatPrice(999)).toBe('€999');
  });

  it('корректно форматирует 0', () => {
    expect(formatPrice(0)).toBe('€0');
  });

  it('корректно форматирует большие числа', () => {
    expect(formatPrice(100000)).toBe('€100000');
  });
});