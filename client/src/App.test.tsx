import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('It should renders the title', () => {
  render(<App />);
  const typography = screen.getByText('We just need your ziocode');
  expect(typography).toBeInTheDocument();
});
