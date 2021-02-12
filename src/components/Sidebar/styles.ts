import styled from 'styled-components';

export const Container = styled.aside`
  grid-area: SB;
  background: #212121;
  overflow: auto;

  ::-webkit-scrollbar {
    /* display: none; */
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #989898; 
    display: none;
  }

  &:hover ::-webkit-scrollbar-thumb {
    display: block;
  }
`;

export const Box = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 12px 0;

  & + ul {
    border-top: 1px solid #303030;
  }

  h2 {
    font-size: 1.4rem;
    font-weight: 500;
    color: #aaa;
    padding: 4px 24px 8px 24px;
  }

  div.text-block {
    display: flex;
    flex-direction: column;
    margin-left: 24px;

    > span {
      font-size: 1.3rem;
      font-weight: 500;
      line-height: 18px;
      color: #aaa;
    }
  }

  div.text-block + div.text-block {
    margin-top: 8px;
  }

  div.text {
    display: flex;

    > span {
      font-size: 1.3rem;
      font-weight: 500;
      line-height: 18px;
      color: #aaa;
    }

    span + span {
      margin-left: 8px;
    }
  }

  > span {
    margin: 16px 0 8px 24px;
    font-size: 1.3rem;
    font-weight: 400;
    line-height: 18px;
    color: #717171;
  }
`;

interface ItemProps {
  isSelected?: boolean;
}

export const Item = styled.li<ItemProps>`
  width: 100%;
  height: 40px;

  display: flex;
  align-items: center;
  padding: 0 24px;

  color: #fff;
  font-size: 1.4rem;
  line-height: 21px;
  cursor: pointer;
  background: ${props => props.isSelected ? '#404040' : 'none'};

  transition: 0.2s;

  img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin-right: 24px;
  }

  svg {
    margin-right: 24px;
  }

  &:hover {
    background: ${props => props.isSelected ? '#606060' : '#404040'};
  }
`;

export const Notification = styled.div`
  width: 4px;
  height: 4px;
  background: #3ea6ff;
  border-radius: 50%;

  margin-left: auto;
`;