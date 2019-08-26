import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  border: 1px solid ${props => props.theme.colors.lightGrey};
  border-radius: 4px;
  margin-bottom: 1em;
  margin-left: 1em;
  margin-right: 1em;
  padding: 0.5em;
  color: ${props => props.theme.colors.coolGrey};
  text-decoration: none;
`;

export const CardIcon = styled.div`
  padding: 0 0.2em;
  font-size: 6em;
`;
export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 6px;
  padding: 0.5em;
  font-size: 1em;
`;
export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CardTitle = styled.h1`
  font-size: 2.2em;
  padding-bottom: 0.35em;
  color: ${props => props.theme.colors.primaryText};
  text-align: ${props => (props.center ? 'center' : 'left')};
`;
export const Row = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  padding-bottom: 1em;
`;
export const RowTitle = styled.div`
  flex: 1;
  min-width: 10em;
  color: ${props => props.theme.colors.secondaryMagenta};
  font-weight: 700;
  flex-wrap: nowrap;
`;
export const RowValue = styled.code`
  flex: 2;
  color: ${props => props.theme.colors.coolGrey};
  font-weight: 400;
`;
