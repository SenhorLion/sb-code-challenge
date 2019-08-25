import React from 'react';

const renderLanguages = (languages = []) =>
  languages.map(lang => {
    return (
      <p key={lang.code}>
        {lang.name} ({lang.native})
      </p>
    );
  });

export default renderLanguages;
