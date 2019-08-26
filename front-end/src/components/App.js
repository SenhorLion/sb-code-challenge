import React from 'react';
import styled from 'styled-components';
import Routes from '../routes';

const AppDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  min-width: 100vw;
  background-color: white;
  justify-content: center;
`;

const App = () => {
  return (
    <AppDiv className="app">
      <Routes />
    </AppDiv>
  );
};

export default App;
