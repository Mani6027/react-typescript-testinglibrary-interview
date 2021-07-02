import React from 'react';
import { cleanup } from '@testing-library/react';
import { render } from '../../test/test-utils';
import '@testing-library/jest-dom/extend-expect';

import Home from './Home';

afterEach(cleanup);

it('renders <Home /> page', () => {
  // ARRANGE
  const { getByTestId, container } = render(<Home/>);

  // ASSERT
  expect(getByTestId('home-page-header')).toHaveTextContent('Welcome!');
  expect(container.querySelector('a').getAttribute('href')).toBe('/about');
});
