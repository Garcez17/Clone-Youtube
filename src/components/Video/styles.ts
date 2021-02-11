import styled from 'styled-components';

export const Container = styled.div`
  h3 {
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 16px;
    color: #fff;
    padding: 8px 0;
  }

  > div {
    display: flex;
    flex-direction: column;

    span {
      display: flex;
      align-items: center;
      font-size: 1.3rem;
      font-weight: 400;
      line-height: 18px;
      color: #aaa;

      svg {
        margin-left: 4px;
      }
    }
  }
`;
