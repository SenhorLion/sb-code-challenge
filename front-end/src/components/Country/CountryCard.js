import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { renderLanguages } from '../../utils';
import { CardTitle } from '../Text';

const CardLink = styled(Link)`
  display: flex;
  flex: 1;
  flex-direction: column;
  border: 1px solid ${props => props.theme.colors.lightGrey};
  margin-bottom: 8px;
  margin-left: 12px;
  margin-right: 12px;
  padding: 0.5em;
  color: ${props => props.theme.colors.coolGrey};
  text-decoration: none;
`;

// helper to render Array of languages

const CountryCard = ({ country }) => {
  return (
    <CardLink to={`/countries/${country.code}`}>
      <CardTitle>
        <span>{country.emoji}</span>
        {country.name}
      </CardTitle>

      <h3>
        Code: <span>{country.code}</span>
      </h3>
      <h3>
        Continent: <span>{country.continent.name}</span>
      </h3>

      <h3>Languages:</h3>
      <span>{renderLanguages(country.languages)}</span>
    </CardLink>
  );
};

CountryCard.propTypes = {
  country: PropTypes.shape({
    code: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    native: PropTypes.string.isRequired,
    continent: PropTypes.shape({
      code: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    languages: PropTypes.array.isRequired,
    emoji: PropTypes.string.isRequired,
  }).isRequired,
};

export default CountryCard;
