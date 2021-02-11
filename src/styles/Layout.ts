import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 56px auto;
  grid-template-areas: 
    'HD HD'
    'SB DB';
  
  height: 100vh;
`;
