import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FilterLink, SubTitle } from '../Text';

const FilterLinkDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  border: 1px solid ${props => props.theme.colors.lightGrey};
  margin-top: 1em;
  padding: 0.5em;
  /* color: ${props => props.theme.colors.lightBlue}; */
  /* justify-content: center; */
  
  `;
const CenterDiv = styled.div`
  flex: 1;
  align-self: center;
  align-items: center;
  margin-left: 1em;
`;

// TODO: For small screen use a dropdown list
const FilterCountryLinks = ({ countries = [], color }) => {
  return (
    <FilterLinkDiv>
      <SubTitle color={color}>Quick links:</SubTitle>
      <CenterDiv>
        {countries.map(country => (
          <FilterLink href={`#${country.title}`}>{country.title}</FilterLink>
        ))}
      </CenterDiv>
    </FilterLinkDiv>
  );
};

FilterCountryLinks.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.object).isRequired,
  color: PropTypes.string.isRequired,
};

export default FilterCountryLinks;
