import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import Countries from './Countries';

const Routes = () => {
  return (
    <>
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/countries" render={() => <Countries />} />
    </>
  );
};

export default Routes;
