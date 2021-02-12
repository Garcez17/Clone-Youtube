import styled from 'styled-components';

export const Container = styled.div`
  h3 {
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 16px;
    color: #fff;
    padding: 8px 0;
  }
`;

export const Thumbnail = styled.div`
  width: 210px;
  height: 118px;

  position: relative;
`;

export const WatchLater = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;

  display: flex;

  min-width: 120px;
  height: 28px;
`;

interface ButtonsProps {
  showIcon: boolean;
}

export const ClockButton = styled.div<ButtonsProps>`
  width: 28px;
  height: 28px;
  border-radius: 4px;
  margin-left: auto;

  display: ${props => props.showIcon ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.3);

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background: rgba(0, 0, 0, 0.9);
    border-radius: 0 4px 4px 0;
  }
`;

interface TextWatchProps {
  showWatchText: boolean;
}

export const TextWatch = styled.div<TextWatchProps>`
  flex: 1;

  display: ${props => props.showWatchText ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  border-radius: 4px 0 0 4px;

  font-size: 1.3rem;
  font-weight: 500;
  color: #fff;
  padding: 0 4px;

  background: rgba(0, 0, 0, 0.9);
`;

interface TextQueueProps {
  showQueueText: boolean;
}

export const TextQueue = styled.div<TextQueueProps>`
  flex: 1;

  display: ${props => props.showQueueText ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  border-radius: 4px 0 0 4px;

  font-size: 1.3rem;
  font-weight: 500;
  color: #fff;
  padding: 0 4px;

  background: rgba(0, 0, 0, 0.9);
`;

export const AddOnQueue = styled.div`
  position: absolute;
  top: 38px;
  right: 5px;

  display: flex;

  min-width: 120px;
  height: 28px;
`;

export const QueueButton = styled.div<ButtonsProps>`
  width: 28px;
  height: 28px;
  border-radius: 4px;
  margin-left: auto;

  display: ${props => props.showIcon ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.3);

  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.9);
    border-radius: 0 4px 4px 0;
  }
`;


export const Timer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px 4px;

  min-width: 35px;
  height: 18px;
  border-radius: 4px;

  font-size: 1.2rem;
  letter-spacing: 0.5px;
  font-weight: 500;
  color: #fff;
  line-height: 12px;

  right: 5px;
  bottom: 5px;

  background: rgba(0, 0, 0, 0.5);
`;

export const Informations = styled.div`
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
`;
