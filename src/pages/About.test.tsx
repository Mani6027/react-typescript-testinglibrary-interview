import React from 'react';
import userEvent from '@testing-library/user-event';
import { cleanup } from '@testing-library/react';
import { render } from '../../test/test-utils';
import '@testing-library/jest-dom/extend-expect';

import About from './About';

afterEach(cleanup);

it('renders <About /> page', () => {
  // ARRANGE
  const { getByTestId } = render(<About/>);

  // ASSERT
  expect(getByTestId('about-page-header')).toHaveTextContent('About Page');
  expect(getByTestId('about-page-counter')).toHaveTextContent('0');
});

it('clicks button and fires increment counter', () => {
  // ARRANGE
  const { getByTestId } = render(<About/>);
  
  // ACTION
  userEvent.click(getByTestId('about-page-button'));

  // ASSERT
  expect(getByTestId('about-page-counter')).toHaveTextContent('1');
});
