import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Loading from 'react-loading';
import styled, { withTheme } from 'styled-components';
import sortBy from 'lodash/sortBy';

import { TitleH2 } from '../components/Text';
import { CountryCard, FilterCountryLinks } from '../components/Country';
import { countries } from '../__mocks__/countries.mock';
// NB: This is a Container Component to fetch data
// it will wrap the CountriesList component
/**
 * Display the list of countries and the languages spoken in that country,
 * both in English and native,
 * also display the continent it is located in.
 *
 * Request GraphQL API query to get country data and rendering the list
 */

// FLAG | Country Name, Code, Continent | Languages: English | Native
// 🇦🇩 | Andorra, Europe | Code: AD | Languages: Catalan (Català)

// API: https://countries.trevorblades.com/

//  query:
//    countries {
//      code
//      name
//  }

const StyledDiv = styled.div`
  flex: 1;
  border: 0px solid ${props => props.theme.colors.black};
  margin-bottom: 6px;
  padding: 0.5em;
  color: ${props => props.theme.colors.coolGrey};
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const BackToTop = styled.a`
  display: flex;
  font-size: 1em;
  color: ${props => props.theme.colors.coolGrey};
  text-align: ${props => (props.center ? 'center' : 'left')};
  padding: 1em;
`;

const countriesByLetter = countries =>
  countries.reduce((obj, country) => {
    const firstLetter = country.name[0].toUpperCase();
    return {
      ...obj,
      [firstLetter]: [...(obj[firstLetter] || []), country],
    };
  }, {});

// write a GraphQL query that asks for names and codes for all countries

class Countries extends React.Component {
  state = {
    isLoading: true,
    error: null,
    countries: [],
  };

  componentDidMount() {
    this.getCountries();
  }

  getCountries = async () => {
    // TODO fetch from API

    try {
      this.setState({ isLoading: true });

      if (countries) {
        // Convert countries into Sections by Letter
        // {
        //   A: [{...countries for A}],
        //   B: [{...countries for B}],
        //   ...etc
        // }
        const countriesByLetterList = countriesByLetter(countries);
        const countrySections = Object.keys(countriesByLetterList)
          .sort()
          .map(letter => ({
            data: sortBy(countriesByLetterList[letter], ['name']),
            title: letter,
          }));

        this.setState({ isLoading: false, countries: countrySections });
      } else {
        throw Error('No countries found');
      }
    } catch (error) {
      this.setState({ isLoading: false, error });
    }
  };

  renderCountries = country => {
    const { title, data } = country;

    return (
      <StyledDiv key={title}>
        <TitleH2 id={title} center>
          {title}
        </TitleH2>
        <BackToTop href="#top">Back to top</BackToTop>
        {data.map(item => {
          return <CountryCard key={item.code} country={item} />;
        })}
      </StyledDiv>
    );
  };

  renderFilterLinks = () => {
    const { countries } = this.state;
    const { theme } = this.props;
    const {
      colors: { secondaryMagenta },
    } = theme;
    return (
      <FilterCountryLinks countries={countries} color={secondaryMagenta} />
    );
  };

  render() {
    const { isLoading, error, countries } = this.state;

    return (
      <div>
        <Link to="/">{'< Back'}</Link>

        {isLoading && (
          <Loading delay={200} type="spokes" color="#222" className="loading" />
        )}

        {error && <p>Error {error}</p>}

        {countries && countries.length && (
          <div>
            {this.renderFilterLinks(countries)}

            {countries.map(this.renderCountries)}
          </div>
        )}
      </div>
    );
  }
}

Countries.propTypes = {
  theme: PropTypes.PropTypes.shape({
    colors: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
};

export default withTheme(Countries);
