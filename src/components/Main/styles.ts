import styled from 'styled-components';

export const Container = styled.main`
  grid-area: DB;
  background: #181818;
  padding: 24px;
  overflow: auto;

  div + header {
    border-top: 1px solid #303030;
    margin-top: 24px;
    padding-top: 32px;
    
  }
`;

export const MainHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;

  span {
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 20px;
    color: #fff;
  }

  > div {
    display: flex;
    align-items: center;

    button {
      margin-right: 24px;
      font-size: 1.4rem;
      font-weight: 500;
      color: #3ea6ff;
    }

    svg + svg {
      margin-left: 16px;
    }
  }
`;

export const VideosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 4px;
  grid-row-gap: 20px;
`;
