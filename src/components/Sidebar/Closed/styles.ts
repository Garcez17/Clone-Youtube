import styled from 'styled-components';

export const Container = styled.div`
  grid-area: SB;
  background: #212121;
`;

export const Item = styled.div`
  width: 100%;
  height: 74px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    margin-top: 8px;
    font-size: 1rem;
    font-weight: 400;
    color: #aaaaaa;
    cursor: pointer;
  }

  cursor: pointer;

  &:hover {
    background: #303030;
  }
`;
