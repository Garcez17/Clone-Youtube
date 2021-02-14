import Image from 'next/image';

import { FaCheckCircle } from 'react-icons/fa';
import { AiFillClockCircle } from 'react-icons/ai';
import { MdPlaylistPlay } from 'react-icons/md';

import VideoImg from '../../assets/reactjs.png';

import { 
  Container, 
  Thumbnail, 
  Title,
  ThreeDotsIcon,
  WatchLater, 
  ClockButton,
  AddOnQueue,
  TextWatch,
  TextQueue,
  QueueButton,
  Timer, 
  Informations,
  LiveContainer,
  ProgrammedContainer,
  ContainerBtn
} from './styles';
import { useState } from 'react';

interface VideoProps {
  isVerified?: boolean;
  isLive?: boolean;
  isProgrammed?: boolean;
}

const Video: React.FC<VideoProps> = ({ isVerified, isLive, isProgrammed }) => {
  const [showIcon, setShowIcon] = useState(false);
  const [showWatchText, setShowWatchText] = useState(false);
  const [showQueueText, setShowQueueText] = useState(false);

  return (
    <Container 
      onMouseOver={() => setShowIcon(true)} 
      onMouseLeave={() => setShowIcon(false)}
    >
      <Thumbnail>
        <Image src={VideoImg} height={118} width={210} />

        <WatchLater>
          <TextWatch showWatchText={showWatchText}>
            ASSISTIR MAIS TARDE
          </TextWatch>
          <ClockButton 
            showIcon={showIcon}
            onMouseOver={() => setShowWatchText(true)} 
            onMouseLeave={() => setShowWatchText(false)}
          >
            <AiFillClockCircle size={20} color="#FFFFFF" />
          </ClockButton>
        </WatchLater>

        <AddOnQueue>
          <TextQueue showQueueText={showQueueText}>
            ADICIONAR À FILA
          </TextQueue>
          <QueueButton 
            showIcon={showIcon}
            onMouseOver={() => setShowQueueText(true)} 
            onMouseLeave={() => setShowQueueText(false)}
          >
            <MdPlaylistPlay size={20} color="#FFFFFF" />
          </QueueButton>
        </AddOnQueue>

        {isProgrammed ? (
          <Timer>AO VIVO</Timer>
        ) : isLive ? (
          <></>
        ) : (
          <Timer>28:37</Timer>
        )}
      </Thumbnail>
      <Title>
        <h3>REACT JS & NEXTJS! CLONE YOUTUBE!</h3>
        {showIcon && <ThreeDotsIcon />}
      </Title>
      <Informations>
        <span>
          Channel 01
          {isVerified && <FaCheckCircle size={12} color="#909090" />}
        </span>
        {isLive ? (
          <>
            <span>5,9 mil assistindo</span>
            <LiveContainer>
              <strong>AO VIVO AGORA</strong>
            </LiveContainer>
          </>
        ) : isProgrammed ? (
          <>
            <span>Programado para 17/02/2021 20:00</span>
            <ContainerBtn>
              <div className="info">
                <span>Receber um lembrete quando este evento estiver para iniciar.</span>
              </div>
              <ProgrammedContainer>
                <strong>DEFINIR LEMBRETE</strong>
              </ProgrammedContainer>
            </ContainerBtn>
          </>
        ) : (
          <>
            <span>59 mil visualizações</span>
            <span>há 10 horas</span>
          </>
        )}
      </Informations>
    </Container>
  );
}

export default Video;