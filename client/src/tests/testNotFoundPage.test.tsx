import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { NotFoundPage } from '../pages/not-found-page/not-found-page'; 
import { AppRoute } from '../const';

describe('NotFoundPage', () => {
  const renderPage = () => render(
    <MemoryRouter>
      <NotFoundPage />
    </MemoryRouter>
  );

  it('отображает заголовок PAGE NOT FOUND', () => {
    renderPage();
    
    // Проверяем наличие текста "Page not found"
    expect(screen.getByText(/page not found/i)).toBeInTheDocument();
  });

  it('отображает код ошибки 404', () => {
    renderPage();
    
    // Проверяем наличие кода 404
    expect(screen.getByText('404')).toBeInTheDocument();
  });

  it('ссылка на главную страницу присутствует', () => {
    renderPage();
    
    // Ищем ссылку с текстом "Back to home"
    const link = screen.getByRole('link', { name: /back to home/i });
    expect(link).toBeInTheDocument();
  });

  it('ссылка ведет на "/"', () => {
    renderPage();
    
    const link = screen.getByRole('link', { name: /back to home/i });
    expect(link).toHaveAttribute('href', '/');
  });
});