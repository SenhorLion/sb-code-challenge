import styled from 'styled-components';

export const ContainerDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-bottom: 6px;
  padding: 0.5em;
`;
export const HeaderDiv = styled.div`
  flex-direction: row;
  justify-content: center;
  align-content: left;
  padding: 1em;
  margin-bottom: 2em;
`;

export const ErrorDiv = styled.div`
  display: flex;
  flex: 1;
  border: 0px solid ${props => props.theme.colors.black};
  padding: 0.5em;
  color: ${props => props.theme.colors.secondaryMagenta};
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
