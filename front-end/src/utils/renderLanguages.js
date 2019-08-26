import React from 'react';
import styled from 'styled-components';

const Lang = styled.code`
  display: block;
  color: ${props => props.theme.colors.coolGey};
  font-weight: 400;
  padding-bottom: 0.75em;
`;

const renderLanguages = (languages = []) =>
  languages.map(lang => {
    return (
      <Lang key={lang.code}>
        {lang.name} ({lang.native})
      </Lang>
    );
  });

export default renderLanguages;
