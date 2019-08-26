import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Loader } from '../components/Loader';
import { ContainerDiv, ErrorDiv, HeaderDiv } from '../components/Containers';
import { TitleH1 } from '../components/Text';
import { BackButton } from '../components/Buttons';
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
      <TitleH1 center>Country Detail</TitleH1>
      <HeaderDiv>
        <BackButton to="/countries">{'< Back'}</BackButton>
      </HeaderDiv>

      <Query query={GET_COUNTRY} variables={{ code }}>
        {({ loading, error, data }) => {
          if (loading) return <Loader text="Loading" />;
          if (error)
            return (
              <ErrorDiv>
                <p>{error.message}</p>
              </ErrorDiv>
            );
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
