import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${props => props.theme.cadetblue};
  padding: 0 32px 50px 32px;
  font-weight: 600;
  font-size: 24px;
  text-align: center;

  .lessons {
    display: flex;
  }

  .lesson {
    display: flex;
    padding: 8px;
  }
`;
