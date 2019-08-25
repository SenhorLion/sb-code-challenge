import React from 'react';
import styled from 'styled-components';
import { Button } from '../components/Buttons';

const StyledDiv = styled.div`
  display: flex;
  flex: 1;
  padding: 1em;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
/**
 * Display basic links for the other routes
 */
const Home = () => {
  return (
    <StyledDiv>
      <Button primary to="/countries">
        View Countries
      </Button>
    </StyledDiv>
  );
};

export default Home;
