import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'styled-components';
import { initApollo } from './apollo';
import { theme } from './theme';
import App from './components/App';

import './globalcss/index.css';

const apolloClient = initApollo();

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
);
