import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { ContainerDiv, HeaderDiv, ErrorDiv } from '../components/Containers';
import { Loader } from '../components/Loader';
import CountryList from '../components/Country/CountryList';
import { TitleH1 } from '../components/Text';
import { BackButton, Button } from '../components/Buttons';

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
      <TitleH1 center>Countries List</TitleH1>
      <HeaderDiv>
        <BackButton to="/">{'< Back'}</BackButton>
      </HeaderDiv>

      <Query query={GET_COUNTRIES}>
        {({ loading, error, data }) => {
          if (loading) return <Loader text="Loading countries..." />;
          if (error)
            return (
              <ErrorDiv>
                <p>{error.message}</p>
                <p>
                  <Button to="/">Click here to try again</Button>
                </p>
              </ErrorDiv>
            );
          return <CountryList countries={data.countries} />;
        }}
      </Query>
    </ContainerDiv>
  );
};

export default Countries;
