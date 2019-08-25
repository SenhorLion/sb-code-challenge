import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import Loading from 'react-loading';

const LoaderDiv = styled.div`
  flex: 1;
  justify-content: center;
  flex-direction: column;
  display: flex;
  align-self: center;
  align-items: center;
`;

const Loader = ({ children, theme }) => {
  return (
    <LoaderDiv>
      <Loading type="spokes" color={theme.colors.secondaryLightMagenta} />
      {children}
    </LoaderDiv>
  );
};

Loader.defaultProps = {
  children: '',
};

Loader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.string,
  ]),
  theme: PropTypes.PropTypes.shape({
    colors: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
};
export default withTheme(Loader);
