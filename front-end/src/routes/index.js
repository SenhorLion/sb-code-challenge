import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import CountryList from './CountryList';

const Routes = () => {
  return (
    <>
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/countries" render={() => <CountryList />} />
    </>
  );
};

export default Routes;
