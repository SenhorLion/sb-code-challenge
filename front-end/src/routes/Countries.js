import React from 'react';
import { Link } from 'react-router-dom';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { ContainerDiv, HeaderDiv } from '../components/containers';
import { Loader } from '../components/Loader';
import CountryList from '../components/Country/CountryList';
import { SubTitle } from '../components/Text';

const GET_COUNTRIES = gql`
  {
    countries {
      code
      name
      native

      continent {
        code
        name
      }

      languages {
        code
        name
        native
        rtl
      }
      emoji
    }
  }
`;

const Countries = () => {
  return (
    <ContainerDiv>
      <HeaderDiv>
        <Link to="/">{'< Back'}</Link>
      </HeaderDiv>

      <Query query={GET_COUNTRIES}>
        {({ loading, error, data }) => {
          if (loading)
            return (
              <Loader>
                <SubTitle>Loading</SubTitle>
              </Loader>
            );
          if (error) return <p>{error.message}</p>;
          return <CountryList countries={data.countries} />;
        }}
      </Query>
    </ContainerDiv>
  );
};

export default Countries;
