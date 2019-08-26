import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { renderLanguages } from '../../utils';
import { SubTitleInline } from '../Text';
import {
  CardIcon,
  CardContent,
  CardTitle,
  CardInfo,
  Row,
  RowTitle,
  RowValue,
} from './Card';

const CardLink = styled(Link)`
  display: flex;
  flex: 1;
  flex-direction: row;
  border: 1px solid ${props => props.theme.colors.lightGrey};
  border-radius: 4px;
  margin-bottom: 1em;
  margin-left: 1em;
  margin-right: 1em;
  padding: 0.5em;
  color: ${props => props.theme.colors.coolGrey};
  text-decoration: none;

  :hover {
    background: ${props => props.theme.colors.lightGrey};
  }
`;

const CountryCard = ({ country }) => {
  return (
    <CardLink to={`/countries/${country.code}`}>
      <CardIcon>{country.emoji}</CardIcon>
      <CardContent>
        <CardTitle>
          {country.name} <SubTitleInline>({country.native})</SubTitleInline>
        </CardTitle>

        <CardInfo>
          <Row>
            <RowTitle>Country Code:</RowTitle>
            <RowValue>{country.code}</RowValue>
          </Row>

          <Row>
            <RowTitle>Continent:</RowTitle>
            <RowValue>{country.continent.name}</RowValue>
          </Row>

          <Row>
            <RowTitle>Languages:</RowTitle>
            <RowValue>{renderLanguages(country.languages)}</RowValue>
          </Row>
        </CardInfo>
      </CardContent>
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
