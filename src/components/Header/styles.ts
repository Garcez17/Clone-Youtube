import styled from 'styled-components';

export const Container = styled.header`
  grid-area: HD;
  background: #202020;
  padding: 0 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;

  > button {
    padding: 8px;
    margin-right: 16px;
  }

  > div {
    display: flex;
  }

  span {
    margin-left: 3px;
    align-self: flex-start;
    color: #9F9F9F;
    font-size: 1rem;
    font-weight: 400;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;

  > div {
    display: flex;
    align-items: center;
    padding: 0 4px;
    margin-right: 8px;

    input {
      width: 575px;
      height: 30px;
      background: #121212;
      border: 1px solid #323232;

      font-size: 1.6rem;
      font-weight: 400;
      line-height: 24px;
      padding: 0 6px;
      outline: none;
      color: rgba(255, 255, 255, 0.88);
    }

    button {
      width: 65px;
      height: 30px;
      background: #323232;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  
  svg + svg {
    margin-left: 24px;
  }

  > button {
    margin: 0 16px 0 32px;
    > img {
      border-radius: 50%;
    }
  }
`;
