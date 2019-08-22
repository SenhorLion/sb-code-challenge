import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// TODO: Move to a styled component folder "typography or summink"
const StyledH1 = styled.h1`
  font-size: 4em;
  color: ${props => props.theme.colors.primary};
`;

/**
 * Display basic links for the other routes
 */
const Home = () => {
  return (
    <div>
      <StyledH1>Home</StyledH1>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/countries">Countries</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
