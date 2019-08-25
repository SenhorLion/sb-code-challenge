import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import Countries from './Countries';
import Country from './Country';

const Routes = () => {
  return (
    <>
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/countries" render={() => <Countries />} />
      <Route
        exact
        path="/countries/:code"
        render={({ match }) => <Country code={match.params.code} />}
      />
    </>
  );
};

export default Routes;
