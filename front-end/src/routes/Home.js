import React from 'react';
import styled from 'styled-components';
import { Button } from '../components/Buttons';
import { TitleH1 } from '../components/Text';

const ContainerDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  max-width: 100vw;
  background-color: white;
`;

const StyledDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 4em 1em;
  align-items: center;
`;

const Quote = styled.code`
  font-size: 1.75em;
  color: ${props => props.theme.colors.secondaryLightMagenta};
  font-weight: 600;
  text-align: center;
  padding: 2em;

  span {
    display: block;
    padding-top: 0.5em;
    font-weight: 400;
    color: ${props => props.theme.colors.coolGrey};
  }
`;
/**
 * Display basic links for the other routes
 */
const Home = () => {
  return (
    <ContainerDiv>
      <TitleH1 center>Countries List</TitleH1>
      <Quote>
        {`"Reach for the stars, and if you don't grab 'em, at least you'll fall on
        top of the world"`}
        <span>— Pitbull</span>
      </Quote>
      <StyledDiv>
        <Button primary to="/countries">
          View Countries
        </Button>
      </StyledDiv>
    </ContainerDiv>
  );
};

export default Home;
