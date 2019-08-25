import React from 'react';
import PropTypes from 'prop-types';

import { renderLanguages } from '../../utils';
import { TitleH2, SubTitleInline } from '../Text/index';

/**
 * Display the currency and a area code (phone) of that country..
 *
 */
const CountryDetailCard = ({ country }) => {
  return (
    <div>
      <TitleH2>
        <span>{country.emoji}</span>
        {country.name} <SubTitleInline>({country.native})</SubTitleInline>
      </TitleH2>
      <h2>Currency: </h2>
      <p>{country.currency}</p>
      <h2>Area code: </h2>
      <p>{country.phone}</p>
      <div>
        <h2>Languages spoken:</h2>
        {renderLanguages(country.languages)}
      </div>
    </div>
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
