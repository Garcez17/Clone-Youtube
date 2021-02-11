import Image from 'next/image';
import { Container, Menu, SearchBar, Buttons } from './styles';
import { FiMenu, FiSearch } from 'react-icons/fi';
import { GoDeviceCameraVideo } from 'react-icons/go';
import { AiFillBell } from 'react-icons/ai';
import { CgMenuGridR } from 'react-icons/cg';
import { IoMdMic } from 'react-icons/io';

import LogoImg from '../../assets/ytb-logo.png';
import UserAvatar from '../../assets/userAvatar.jpg';

const Header: React.FC = () => {
  return (
    <Container>
      <Menu>
        <button>
          <FiMenu size={22} color="#fff" />
        </button>

        <div>
          <Image src={LogoImg} height={18} width={76}  />
          <span>BR</span>
        </div>
      </Menu>

      <SearchBar>
        <div>
          <input type="text" placeholder="Pesquisar" />
          <button>
            <FiSearch size={18} color="#727272" />
          </button>
        </div>
        <button>
          <IoMdMic size={22} color="#fff" />
        </button>
      </SearchBar>

      <Buttons>
        <GoDeviceCameraVideo size={20} color="#fff" />
        <CgMenuGridR size={24} color="#fff" />
        <AiFillBell size={22} color="#fff" />

        <button>
          <img src={UserAvatar} height={32} width={32} />
        </button>
      </Buttons>
    </Container>
  );
}

export default Header;