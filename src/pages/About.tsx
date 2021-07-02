import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { useDispatch, useSelector } from 'react-redux';

import { ReduxState } from '../redux/store';
import { incrementOne } from '../redux/actions/sample';

const About: React.FC<RouteComponentProps> = (): JSX.Element => {
  const dispatch = useDispatch();
  const counter = useSelector((state: ReduxState) => state.sample.counter);

  return (
    <section>
      <>
        <h1 data-testid="about-page-header">About Page</h1>
        <button data-testid="about-page-button" onClick={() => dispatch(incrementOne)}>Increment</button>
        <p data-testid="about-page-counter">Current Count: {counter}</p>
      </>
    </section>
  );
};

export default About;
