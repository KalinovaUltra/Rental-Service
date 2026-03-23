import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { LoadingPage } from '../components/loading-page/loading-page';

describe('LoadingPage', () => {
  it('отображает текст загрузки', () => {
    render(<LoadingPage />);
    expect(screen.getByText(/загрузка/i)).toBeInTheDocument();
  });

  it('отображает спиннер или индикатор загрузки', () => {
    render(<LoadingPage />);
    // Ищем по регулярному выражению вместо точного текста
    expect(screen.getByText(/⏳/)).toBeInTheDocument();
  });

  it('отображает правильный текст загрузки', () => {
    render(<LoadingPage />);
    expect(screen.getByText(/⏳ Загрузка\.\.\./)).toBeInTheDocument();
  });
});