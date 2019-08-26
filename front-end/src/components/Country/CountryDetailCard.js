import React from 'react';
import PropTypes from 'prop-types';

import { renderLanguages } from '../../utils';
import { SubTitleInline } from '../Text/index';
import {
  CardContainer,
  CardIcon,
  CardContent,
  CardTitle,
  CardInfo,
  Row,
  RowTitle,
  RowValue,
} from './Card';

const CountryDetailCard = ({ country }) => {
  return (
    <CardContainer>
      <CardIcon>{country.emoji}</CardIcon>
      <CardContent>
        <CardTitle>
          {country.name} <SubTitleInline>({country.native})</SubTitleInline>
        </CardTitle>

        <CardInfo>
          <Row>
            <RowTitle>Currency:</RowTitle>
            <RowValue>{country.currency}</RowValue>
          </Row>

          <Row>
            <RowTitle>Area code:</RowTitle>
            <RowValue>{country.phone}</RowValue>
          </Row>

          <Row>
            <RowTitle>Languages:</RowTitle>
            <RowValue>{renderLanguages(country.languages)}</RowValue>
          </Row>
        </CardInfo>
      </CardContent>
    </CardContainer>
  );
};

CountryDetailCard.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.string.isRequired,
    native: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    languages: PropTypes.array.isRequired,
    emoji: PropTypes.string.isRequired,
  }).isRequired,
};

export default CountryDetailCard;
