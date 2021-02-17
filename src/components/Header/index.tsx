import { useCallback, useRef, useState } from 'react';
import Image from 'next/image';
import { FiMenu, FiSearch } from 'react-icons/fi';
import { GoDeviceCameraVideo } from 'react-icons/go';
import { AiFillBell } from 'react-icons/ai';
import { CgMenuGridR, CgMediaLive } from 'react-icons/cg';
import { IoMdMic } from 'react-icons/io';
import { AiOutlinePlaySquare } from 'react-icons/ai';
import { SiYoutubetv, SiYoutube } from 'react-icons/si';

import { useToogleSidebarState } from '../../hooks/Sidebar';

import LogoImg from '../../assets/ytb-logo.png';
import UserAvatar from '../../assets/userAvatar.jpg';

import VoiceModal, { ModalHandles } from './VoiceModal';
import { 
  Container,
  Menu,
  SearchBar,
  ContainerInput,
  Buttons,
  ContainerBtn,
  ContainerOptions,
  Separator
} from './styles';

const Header: React.FC = () => {
  const modalRef = useRef<ModalHandles>();
  const { toogleView, isOpened } = useToogleSidebarState();
  const [isheaderVideoOptionsOpen, setIsHeaderVideoOptionsOpen] = useState(false);
  const [isheaderYoutubeOptionsOpen, setIsHeaderYoutubeOptionsOpen] = useState(false);

  const handleToogleHeaderVideoOptions = useCallback(() => {
    setIsHeaderVideoOptionsOpen(!isheaderVideoOptionsOpen);
    if (isheaderYoutubeOptionsOpen) {
      setIsHeaderYoutubeOptionsOpen(false);
    }
  }, [isheaderVideoOptionsOpen, isheaderYoutubeOptionsOpen]);

  const handleToogleHeaderYoutubeOptions = useCallback(() => {
    setIsHeaderYoutubeOptionsOpen(!isheaderYoutubeOptionsOpen);
    if (isheaderVideoOptionsOpen) {
      setIsHeaderVideoOptionsOpen(false);
    }
  }, [isheaderYoutubeOptionsOpen, isheaderVideoOptionsOpen]);

  const handleChangeSidebarView = useCallback(() => {
    toogleView(!isOpened);
  }, [isOpened]);

  const handleOpenModal = useCallback(() => {
    modalRef.current?.openModal();
  }, []);

  return (
    <Container>
      <VoiceModal ref={modalRef} />

      <Menu>
        <button onClick={handleChangeSidebarView}>
          <FiMenu size={22} color="#fff" />
        </button>

        <div>
          <Image src={LogoImg} height={18} width={76}  />
          <span>BR</span>
        </div>
      </Menu>

      <SearchBar>
        <ContainerInput>
          <input type="text" placeholder="Pesquisar" />
          <ContainerBtn>
            <button>
              <FiSearch size={18} color="#727272" />
            </button>
            <div>
              <span>Pesquisar</span>
            </div>
          </ContainerBtn>
        </ContainerInput>
        <ContainerBtn>
          <button onClick={handleOpenModal}>
            <IoMdMic size={22} color="#fff" />
          </button>
          <div className="large">
            <span>Pesquisar com sua voz</span>
          </div>
        </ContainerBtn>
      </SearchBar>

      <Buttons>
        <ContainerBtn>
          <button onClick={handleToogleHeaderVideoOptions}>
            <GoDeviceCameraVideo size={20} color="#fff" />
          </button>
          <div>
            <span>Criar</span>
          </div>
          <ContainerOptions isOpen={isheaderVideoOptionsOpen}>
            <button>
              <AiOutlinePlaySquare size={24} color="#6F6F6F" />
              Enviar vídeo
            </button>
            <button>
              <CgMediaLive size={24} color="#6F6F6F" />
              Transmitir ao vivo
            </button>
          </ContainerOptions>
        </ContainerBtn>
        <ContainerBtn>
          <button onClick={handleToogleHeaderYoutubeOptions}>
            <CgMenuGridR size={24} color="#fff" />
          </button>
          <div>
            <span>Aplicativos do YouTube</span>
          </div>
          <ContainerOptions left isOpen={isheaderYoutubeOptionsOpen}>
            <button>
              <SiYoutubetv size={24} color="#FF0000" />
              YouTube TV
            </button>
            <Separator />
            <button>
              <SiYoutube size={24} color="#FF0000" />
              YouTube Music
            </button>
            <button>
              <SiYoutube size={24} color="#FF0000" />
              YouTube Kids
            </button>
            <Separator />
            <button>
              <SiYoutube size={24} color="#FF0000" />
              Escola de Criadores de Conteúdo
            </button>
            <button>
              <SiYoutube size={24} color="#FF0000" />
              YouTube para Artistas
            </button>
          </ContainerOptions>
        </ContainerBtn>
        <ContainerBtn>
          <button>
            <AiFillBell size={22} color="#fff" />
          </button>
          <div>
            <span>Notificações</span>
          </div>
        </ContainerBtn>

        <button>
          <img src={UserAvatar} height={32} width={32} />
        </button>
      </Buttons>
    </Container>
  );
}

export default Header;