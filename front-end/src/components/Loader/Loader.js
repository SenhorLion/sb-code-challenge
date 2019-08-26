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
const LoadingText = styled.h3`
  font-size: 1em;
  color: ${props =>
    props.color ? props.color : props.theme.colors.secondaryLightMagenta};
  text-align: ${props => (props.center ? 'center' : 'left')};
`;

const Loader = ({ text, theme }) => {
  return (
    <LoaderDiv>
      <Loading type="spokes" color={theme.colors.secondaryLightMagenta} />
      {text && <LoadingText>{text}</LoadingText>}
    </LoaderDiv>
  );
};

Loader.defaultProps = {
  text: '',
};

Loader.propTypes = {
  text: PropTypes.string,
  theme: PropTypes.PropTypes.shape({
    colors: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
};
export default withTheme(Loader);
