import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Countries from './Countries';
import Country from './Country';
import NotFound from './NotFound';

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/countries" render={() => <Countries />} />
        <Route
          exact
          path="/countries/:code"
          render={({ match }) => <Country code={match.params.code} />}
        />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default Routes;
