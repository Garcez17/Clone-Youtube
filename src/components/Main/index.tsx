import { FaThList } from 'react-icons/fa';
import { BiGridHorizontal } from 'react-icons/bi';

import Video from '../Video';

import { Container, MainHeader, VideosGrid } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <MainHeader>
        <span>Hoje</span>

        <div>
          <button>GERENCIAR</button>
          <BiGridHorizontal size={32} color="#3EA6FF" />
          <FaThList size={18} color="#909090" />
        </div>
      </MainHeader>

      <VideosGrid>
        <Video isVerified />
        <Video />
        <Video />
        <Video isVerified />
        <Video />
        <Video />
        <Video />
        <Video isVerified />
        <Video />
        <Video />
        <Video />
      </VideosGrid>
      
      <MainHeader>
        <span>Ontem</span>
      </MainHeader>

      <VideosGrid>
        <Video isVerified />
        <Video />
        <Video />
        <Video isVerified />
        <Video />
        <Video />
        <Video />
        <Video isVerified />
        <Video />
        <Video />
        <Video />
      </VideosGrid>
      
      <MainHeader>
        <span>Recentes</span>
      </MainHeader>

      <VideosGrid>
        <Video isVerified />
        <Video />
        <Video />
        <Video isVerified />
        <Video />
        <Video />
        <Video />
        <Video isVerified />
        <Video />
        <Video />
        <Video />
      </VideosGrid>
    </Container>
  );
}

export default Main;