import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import PostList from '../components/PostList';

test('renders loading state', () => {
  render(
    <Provider store={store}>
      <PostList />
    </Provider>
  );
  expect(screen.getByText(/loading/i)).toBeInTheDocument();
});