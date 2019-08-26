import React from 'react';
import PropTypes from 'prop-types';
import sortBy from 'lodash/sortBy';
import styled, { withTheme } from 'styled-components';
import { ErrorDiv } from '../containers';
import { TitleH2 } from '../Text';
import CountryCard from './CountryCard';
import FilterCountryLinks from './FilterCountryLinks';
import { Loader } from '../Loader';

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
  display: block;
  font-size: 1em;
  color: ${props => props.theme.colors.primaryCyan};
  text-align: ${props => (props.center ? 'center' : 'left')};
  padding: 1em;
  text-decoration: none;

  &:visited {
    color: ${props => props.theme.colors.primaryCyan};
    text-decoration: none;
  }
  &:hover {
    color: ${props => props.theme.colors.primaryDarkCyan};
    text-decoration: underline;
  }
`;

class CountryList extends React.Component {
  state = { isLoading: false, countries: [] };

  componentDidMount() {
    // parse received data here before rendering
    this.parseCountryData();
  }

  countriesByLetter = countries =>
    countries.reduce((obj, country) => {
      const firstLetter = country.name[0].toUpperCase();
      return {
        ...obj,
        [firstLetter]: [...(obj[firstLetter] || []), country],
      };
    }, {});

  parseCountryData = () => {
    const { countries } = this.props;

    this.setState({ isLoading: true });

    if (countries) {
      const countriesByLetterList = this.countriesByLetter(countries);
      const countrySections = Object.keys(countriesByLetterList)
        .sort()
        .map(letter => ({
          data: sortBy(countriesByLetterList[letter], ['name']),
          title: letter,
        }));

      this.setState({ isLoading: false, countries: countrySections });
    } else {
      this.setState({
        isLoading: false,
        error: 'Something went wrong parsing data, please try again',
      });
    }
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

  renderCountries = country => {
    const { title, data } = country;
    const { theme } = this.props;
    const {
      colors: { secondaryMagenta },
    } = theme;

    return (
      <StyledDiv key={title}>
        <TitleH2 color={secondaryMagenta} id={title} center>
          {title}
        </TitleH2>
        <BackToTop href="#top">Back to top</BackToTop>
        {data.map(item => {
          return <CountryCard key={item.code} country={item} />;
        })}
      </StyledDiv>
    );
  };

  render() {
    const { countries, isLoading, error } = this.state;

    return isLoading ? (
      <Loader text="Parsing data..." />
    ) : (
      <div>
        {error && (
          <ErrorDiv>
            <p>{error}</p>
          </ErrorDiv>
        )}
        {this.renderFilterLinks(countries)}
        {countries.map(this.renderCountries)}
      </div>
    );
  }
}

CountryList.propTypes = {
  countries: PropTypes.shape({
    name: PropTypes.string.isRequired,
    native: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    languages: PropTypes.array.isRequired,
    emoji: PropTypes.string.isRequired,
  }).isRequired,
  theme: PropTypes.PropTypes.shape({
    colors: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
};

export default withTheme(CountryList);
