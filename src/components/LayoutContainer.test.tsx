import React from 'react';
import { render } from '../../test/test-utils';
import { cleanup } from '@testing-library/react';
import {
  createHistory,
  createMemorySource,
  LocationProvider,
} from '@reach/router'
import '@testing-library/jest-dom/extend-expect'

import LayoutContainer from './LayoutContainer';

afterEach(cleanup);

// HOC to have router context in the LayoutContainer to
// navigate to about page.
// Ref: https://testing-library.com/docs/example-reach-router/
function renderWithRouter(
  ui,
  { route = '/', history = createHistory(createMemorySource(route)) } = {}
) {
  return {
    ...render(<LocationProvider history={history}>{ui}</LocationProvider>),
    history,
  }
}

it('can browse to the about page', async () => {
  // ARRANGE
  const {
    container,
    history: { navigate },
    getByTestId
  } = renderWithRouter(<LayoutContainer />)
  const appContainer = container

  // ASSERT CURRENT PAGE
  expect(appContainer.innerHTML).toMatch('Welcome!')
  expect(appContainer.innerHTML).toMatch('Looks good');

  // ACT ON '/about' route
  await navigate('/about')

  // ASSERT About Page
  expect(container.innerHTML).toMatch('About Page');
  expect(getByTestId('about-page-counter')).toHaveTextContent('0');
});
