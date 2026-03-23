import { render } from '@testing-library/react';
import type { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { reducer as rootReducer } from '../store/reducer';
import { InitialState } from '../store/reducer';

type RenderWithProvidersOptions = {
  initialEntries?: string[];
  preloadedState?: Partial<InitialState>;
};

export function renderWithProviders(
  ui: ReactElement,
  options: RenderWithProvidersOptions = {}
) {
  const {
    initialEntries = ['/'],
    preloadedState = {},
  } = options;

  const store = configureStore({
    reducer: rootReducer,
    preloadedState: preloadedState as InitialState,
  });

  return {
    ...render(
      <Provider store={store}>
        <MemoryRouter initialEntries={initialEntries}>
          {ui}
        </MemoryRouter>
      </Provider>
    ),
    store,
  };
}