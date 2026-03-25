import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { CitiesCard } from '../components/cities-card/cities-card';
import { renderWithProviders } from './render-with-providers';
import { AuthorizationStatus } from '../const'; 

describe('CitiesCard', () => {
  const mockProps = {
    id: 'test-id-123',
    title: 'Beautiful Apartment in Paris',
    type: 'apartment',
    price: 250,
    isPremium: true,
    isFavorite: false,
    previewImage: 'https://example.com/image.jpg',
    rating: 4.5,
  };

  const renderCard = (props = mockProps, isAuth = false) => {
    return renderWithProviders(<CitiesCard {...props} />, {
      preloadedState: {
        authorizationStatus: isAuth ? AuthorizationStatus.Auth : AuthorizationStatus.NoAuth,
      }
    });
  };

  it('заголовок объявления отображается на карточке', () => {
    renderCard();
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
  });

  it('цена объявления присутствует в разметке', () => {
    renderCard();
    expect(screen.getByText(`€${mockProps.price}`)).toBeInTheDocument();
    expect(screen.getByText(/night/i)).toBeInTheDocument();
  });

  it('метка "Premium" отображается когда isPremium = true', () => {
    renderCard({ ...mockProps, isPremium: true });
    expect(screen.getByText('Premium')).toBeInTheDocument();
  });

  it('метка "Premium" отсутствует когда isPremium = false', () => {
    renderCard({ ...mockProps, isPremium: false });
    expect(screen.queryByText('Premium')).not.toBeInTheDocument();
  });

  it('ссылка на страницу объявления содержит id в href', () => {
    renderCard();
    const link = screen.getByRole('link', { name: mockProps.title });
    expect(link).toHaveAttribute('href', `/offer/${mockProps.id}`);
  });

  it('отображает рейтинг в виде процентов', () => {
    renderCard();
    const ratingElement = document.querySelector('.place-card__stars span');
    expect(ratingElement).toHaveStyle({ width: `${mockProps.rating * 20}%` });
  });

  it('отображает тип жилья', () => {
    renderCard();
    expect(screen.getByText(mockProps.type)).toBeInTheDocument();
  });

  it('кнопка избранного присутствует', () => {
    renderCard();
    const bookmarkButton = document.querySelector('.place-card__bookmark-button');
    expect(bookmarkButton).toBeInTheDocument();
  });

  it('кнопка избранного имеет активный класс когда isFavorite = true и пользователь авторизован', () => {
    renderCard({ ...mockProps, isFavorite: true }, true);
    const bookmarkButton = document.querySelector('.place-card__bookmark-button');
    expect(bookmarkButton).toHaveClass('place-card__bookmark-button--active');
  });

  it('кнопка избранного не имеет активный класс когда isFavorite = true но пользователь не авторизован', () => {
    renderCard({ ...mockProps, isFavorite: true }, false);
    const bookmarkButton = document.querySelector('.place-card__bookmark-button');
    expect(bookmarkButton).not.toHaveClass('place-card__bookmark-button--active');
  });

  it('кнопка избранного не имеет активный класс когда isFavorite = false', () => {
    renderCard({ ...mockProps, isFavorite: false }, true);
    const bookmarkButton = document.querySelector('.place-card__bookmark-button');
    expect(bookmarkButton).not.toHaveClass('place-card__bookmark-button--active');
  });
});