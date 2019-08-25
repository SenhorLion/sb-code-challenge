import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TitleH1 = styled.h1`
  font-size: 4em;
  margin: 0;
  padding: 0.25em;
  color: ${props => props.theme.colors.primaryText};
  text-align: ${props => (props.center ? 'center' : 'left')};
`;
const TitleH2 = styled.h2`
  font-size: 3em;
  margin: 0;
  padding: 0.25em;
  color: ${props => props.theme.colors.black};
  text-align: ${props => (props.center ? 'center' : 'left')};
`;
const SubTitle = styled.h3`
  font-size: 1em;
  color: ${props =>
    props.color ? props.color : props.theme.colors.secondaryLightMagenta};
  text-align: ${props => (props.center ? 'center' : 'left')};
`;
const SubTitleInline = styled.span`
  font-size: 0.75em;
  color: ${props => props.theme.colors.coolGrey};
  text-align: ${props => (props.center ? 'center' : 'left')};
`;
const Code = styled.code`
  color: ${props => props.theme.colors.secondaryMagenta};
`;
const CardTitle = styled.h1`
  font-size: 2em;
  color: ${props => props.theme.colors.black};
  text-align: ${props => (props.center ? 'center' : 'left')};
`;

const StyledLink = styled(Link)`
  font-size: 1em;
  color: ${props => props.theme.colors.coolGrey};
`;

const FilterLink = styled.a`
  font-size: 1em;
  padding-right: 0.6em;
  text-decoration: none;
  color: ${props => props.theme.colors.secondaryMagenta};
  &:visited {
    color: ${props => props.theme.colors.lightGrey};
  }
  &:hover {
    color: ${props => props.theme.colors.secondaryDarkMagenta};
    text-decoration: underline;
  }
`;

export {
  TitleH1,
  TitleH2,
  SubTitle,
  SubTitleInline,
  CardTitle,
  StyledLink,
  FilterLink,
  Code,
};
