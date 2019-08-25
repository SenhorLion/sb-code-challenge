import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Loader } from '../components/Loader';
import { ContainerDiv, ErrorDiv, HeaderDiv } from '../components/containers';
import { SubTitle } from '../components/Text';
import { CountryDetailCard } from '../components/Country';

const GET_COUNTRY = gql`
  query country($code: String!) {
    country(code: $code) {
      name
      native
      currency
      phone
      languages {
        code
        name
        native
      }
      emoji
    }
  }
`;

const Country = ({ code }) => {
  return (
    <ContainerDiv>
      <HeaderDiv>
        <Link to="/countries">{'< Back'}</Link>
      </HeaderDiv>

      <Query query={GET_COUNTRY} variables={{ code }}>
        {({ loading, error, data }) => {
          if (loading)
            return (
              <Loader>
                <SubTitle>Loading</SubTitle>
              </Loader>
            );
          if (error) return <ErrorDiv>{error.message}</ErrorDiv>;
          return <CountryDetailCard country={data.country} />;
        }}
      </Query>
    </ContainerDiv>
  );
};

Country.propTypes = {
  code: PropTypes.string.isRequired,
};

export default Country;
