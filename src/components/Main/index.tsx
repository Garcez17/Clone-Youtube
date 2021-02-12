import { FaThList } from 'react-icons/fa';
import { BiGridHorizontal } from 'react-icons/bi';

import Video from '../Video';

import { Container, Wrapper, MainHeader, VideosGrid } from './styles';
import { useToogleSidebarState } from '../../hooks/Sidebar';

const Main: React.FC = () => {
  const { isOpened } = useToogleSidebarState();

  return (
    <Container isOpened={isOpened}>
      <Wrapper>
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
      </Wrapper>
    </Container>
  );
}

export default Main;