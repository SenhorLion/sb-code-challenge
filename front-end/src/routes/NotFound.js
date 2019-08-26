import React from 'react';
import { ContainerDiv, ErrorDiv, HeaderDiv } from '../components/Containers';
import { TitleH1 } from '../components/Text';
import { BackButton, Button } from '../components/Buttons';

const NotFound = () => {
  return (
    <ContainerDiv>
      <TitleH1 center>Countries List</TitleH1>
      <HeaderDiv>
        <BackButton to="/countries">{'< Back'}</BackButton>
      </HeaderDiv>

      <ErrorDiv>
        <p>Route not found</p>
        <p>
          <Button to="/">Click here to try again</Button>
        </p>
      </ErrorDiv>
    </ContainerDiv>
  );
};

export default NotFound;
