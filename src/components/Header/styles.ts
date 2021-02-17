import styled, { css } from 'styled-components';

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
    outline: none;
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
`;

export const ContainerInput = styled.div`
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

  input:focus {
    border-color: #1C62B9;
  }

  button {
    width: 65px;
    height: 30px;
    background: #323232;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;

  > div:nth-child(2) {
    > div {
      min-width: 145px;
    }
  }

  > button {
    margin: 0 16px 0 32px;
    > img {
      border-radius: 50%;
    }
  }
`;

export const ContainerBtn = styled.div`
  position: relative;

  > div {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 99;

    background: rgba(89, 89, 89, 0.9);

    padding: 10px 8px;
    border-radius: 4px;

    transition: 0.2s;

    > span {
      font-size: 1.2rem;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.88);
    }
  }

  div.large {
    min-width: 142px;
  }

  &:hover div {
    opacity: 1;
    visibility: visible;
  }
  
  & + div {
    margin-left: 24px; 
  }
`;

interface ContainerOptions {
  isOpen: boolean;
  left?: boolean;
}

export const ContainerOptions = styled.section<ContainerOptions>`
  position: absolute;
  top: 120%;
  left: ${props => props.left ? '0' : '-55%'};
  z-index: 99;
  padding: 4px 0;
  ${props => props.left && css`
    transform: translateX(-85%);
  `}
  display: ${props => props.isOpen ? 'block' : 'none'};

  background: rgba(36, 36, 36, 0.98);
  border-left: 1px solid #373737;
  border-right: 1px solid #373737;

  button {
    width: ${props => props.left ? '302px' : '200px'};
    height: 40px;
    display: flex;
    align-items: center;
    padding: 16px;

    font-size: 1.4rem;
    font-weight: 400;
    line-height: 21px;
    color: #fff;

    transition: 0.2s;

    svg {
      margin-right: 16px;
    }

    &:hover {
      background: rgba(76, 76, 76, 0.5);
    }
  }
`;

export const Separator = styled.div`
  border-top: 1px solid #373737;
  margin: 8px 0;
`;
