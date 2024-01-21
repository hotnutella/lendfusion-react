import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';

test('renders the users page', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const pageTitle = screen.getByText(/USERS/i);
  expect(pageTitle).toBeInTheDocument();
});