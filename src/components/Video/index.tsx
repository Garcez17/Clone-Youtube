import Image from 'next/image';

import { FaCheckCircle } from 'react-icons/fa';

import VideoImg from '../../assets/reactjs.png';

import { Container } from './styles';

interface VideoProps {
  isVerified?: boolean;
}

const Video: React.FC<VideoProps> = ({ isVerified }) => {
  return (
    <Container>
      <Image src={VideoImg} height={118} width={210} />
      <h3>REACT JS & NEXTJS! CLONE YOUTUBE!</h3>
      <div>
        <span>
          Channel 01
          {isVerified && <FaCheckCircle size={12} color="#909090" />}
        </span>
        <span>59 mil vizualizações</span>
        <span>há 10 horas</span>
      </div>
    </Container>
  );
}

export default Video;