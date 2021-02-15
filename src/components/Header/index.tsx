import { useCallback, useRef } from 'react';
import Image from 'next/image';
import { FiMenu, FiSearch } from 'react-icons/fi';
import { GoDeviceCameraVideo } from 'react-icons/go';
import { AiFillBell } from 'react-icons/ai';
import { CgMenuGridR } from 'react-icons/cg';
import { IoMdMic } from 'react-icons/io';

import { useToogleSidebarState } from '../../hooks/Sidebar';

import LogoImg from '../../assets/ytb-logo.png';
import UserAvatar from '../../assets/userAvatar.jpg';

import { Container, Menu, SearchBar, ContainerInput, Buttons, ContainerBtn } from './styles';
import VoiceModal, { ModalHandles } from './VoiceModal';

const Header: React.FC = () => {
  const modalRef = useRef<ModalHandles>();
  const { toogleView, isOpened } = useToogleSidebarState();

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
          <button>
            <GoDeviceCameraVideo size={20} color="#fff" />
          </button>
          <div>
            <span>Criar</span>
          </div>
        </ContainerBtn>
        <ContainerBtn>
          <button>
            <CgMenuGridR size={24} color="#fff" />
          </button>
          <div>
            <span>Aplicativos do YouTube</span>
          </div>
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