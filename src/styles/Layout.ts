import styled from 'styled-components';

interface ContainerProps {
  isOpened: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: grid;

  grid-template-columns: ${props => props.isOpened ? '250px auto' : '72px auto'};
  grid-template-rows: 56px auto;
  grid-template-areas: 
    'HD HD'
    'SB DB';
  
  height: 100vh;
`;
