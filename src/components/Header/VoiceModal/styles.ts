import styled from 'styled-components';

interface ContainerProps {
  isOpen: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  padding: 8px;

  background: rgba(0, 0, 0, 0.8);

  display: ${props => props.isOpen ? 'flex' : 'none'};
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 592px;
  height: 416px;
  background: #212121;

  padding: 32px 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > div {
    display: flex;
    justify-content: space-between;
    
    h1 {
      font-size: 2.4rem;
      font-weight: 400;
      line-height: 30px;
      color: #fff;
      margin-bottom: 24px;
    }

    span {
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 21px;
      color: #aaaaaa;
    }
  }

  button {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: #4C4C4C;

    align-self: center;
    justify-self: flex-end;
  }

`;