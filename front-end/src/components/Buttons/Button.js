// import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const Button = styled(Link)`
  border-radius: 4px;
  padding: 1em;
  width: 11rem;
  background: white;
  color: ${props => props.theme.colors.primaryCyan};
  border: 2px solid white;
  text-align: center;
  text-decoration: none;

  ${props =>
    props.primary &&
    css`
      background: ${props => props.theme.colors.primaryCyan};
      color: white;

      :hover {
        background: ${props => props.theme.colors.primaryDarkCyan};
      }
    `};
`;

export default Button;
