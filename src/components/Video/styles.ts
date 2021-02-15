import styled from 'styled-components';
import { BsThreeDotsVertical } from 'react-icons/bs';

export const Container = styled.div`
  &:hover {
    cursor: pointer;
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
  border-radius: 2px;

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

  > span {
    max-width: 178px;
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

export const LiveContainer = styled.div`
  width: 100px;
  height: 20px;
  border: 1px solid #FF4E45;
  border-radius: 2px;
  margin-top: 4px;

  display: flex;
  align-items: center;
  justify-content: center;

  strong {
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 12px;
    color: #FF4E45;
  }
`;

export const ProgrammedContainer = styled.div`
  background: #303030;
  width: 142px;
  padding: 6px 0;
  border-radius: 2px;
  margin-top: 4px;

  display: flex;
  align-items: center;
  justify-content: center;

  strong {
    cursor: pointer;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 12px;
    color: #aaaaaa;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  
  h3 {
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 16px;
    color: #fff;
  }
`;

export const ThreeDotsIcon = styled(BsThreeDotsVertical)`
  width: 26px;
  height: 26px;
  color: #909090;
  margin-top: -4px;
  cursor: pointer;

  transition: 0.2s;

  &:hover {
    color: #fff;
  }
`;

export const ContainerBtn = styled.div`
  position: relative;

  div.info {
    width: 340px;
    opacity: 0;
    visibility: hidden;
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-70%);
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

  &:hover div {
    opacity: 1;
    visibility: visible;
  }
  
  & + div {
    margin-left: 24px; 
  }
`;
