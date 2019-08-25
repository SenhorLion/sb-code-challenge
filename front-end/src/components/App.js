import React from 'react';
import styled from 'styled-components';
import Routes from '../routes';
import { TitleH1 } from './Text';

const AppDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  min-width: 100vw;
  /* color: ${props => props.theme.colors.lightBlue}; */
  background-color: white; 
  justify-content: center;
`;

const App = () => {
  return (
    <AppDiv className="app">
      <TitleH1 center>Countries List</TitleH1>
      <Routes />
    </AppDiv>
  );
};

export default App;
