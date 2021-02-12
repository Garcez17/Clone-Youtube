import { useState } from 'react';
import { 
  MdHome, 
  MdSubscriptions, 
  MdVideoLibrary, 
  MdHistory,
  MdThumbUp,
  MdLocalMovies,
  MdSettings,
  MdFlag,
  MdHelp,
  MdFeedback
} from 'react-icons/md';
import { RiFireFill } from 'react-icons/ri';
import { RiVideoLine } from 'react-icons/ri';
import { AiFillClockCircle } from 'react-icons/ai';
import { FaYoutube, FaGamepad, FaTrophy } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
import { CgMediaLive } from 'react-icons/cg';
import { GiBedLamp } from 'react-icons/gi';

import UserAvatar from '../../../assets/avatar.png';

import { Container, Box, Item, Notification } from './styles';

const Opened: React.FC = () => {
  const [isSelected, setIsSelected] = useState(true);
  
  return (
    <Container>
      <Box>
        <Item>
          <MdHome size={24} color="#909090" />
          Início
        </Item>
        <Item>
          <RiFireFill size={24} color="#909090" />
          Em alta
        </Item>
        <Item isSelected>
          <MdSubscriptions size={22} color={isSelected ? "#fff" : "#909090"} />
          Inscrições
        </Item>
      </Box>
      <Box>
        <Item>
          <MdVideoLibrary size={24} color="#909090" />
          Biblioteca
        </Item>
        <Item>
          <MdHistory size={22} color="#909090" />
          Histórico
        </Item>
        <Item>
          <RiVideoLine size={22} color="#909090" />
          Seus vídeos
        </Item>
        <Item>
          <AiFillClockCircle size={22} color="#909090" />
          Assistir mais tarde
        </Item>
        <Item>
          <MdThumbUp size={20} color="#909090" />
          Vídeos marcados co...
        </Item>
        <Item>
          <FiChevronDown size={24} color="#909090" />
          Mostrar mais
        </Item>
      </Box>
      <Box>
        <h2>INSCRIÇÕES</h2>
        <Item>
          <img src={UserAvatar} />
          Channel 01
          <Notification />
        </Item>
        <Item>
          <img src={UserAvatar} />
          Channel 02
        </Item>
        <Item>
          <img src={UserAvatar} />
          Channel 03
          <Notification />
        </Item>
        <Item>
          <img src={UserAvatar} />
          Channel 04
          <Notification />
        </Item>
        <Item>
          <img src={UserAvatar} />
          Channel 05
        </Item>
        <Item>
          <img src={UserAvatar} />
          Channel 06
        </Item>
        <Item>
          <img src={UserAvatar} />
          Channel 07
          <Notification />
        </Item>
        <Item>
          <FiChevronDown size={24} color="#909090" />
          Mostrar mais 103
        </Item>
      </Box>
      <Box>
        <h2>MAIS DO YOUTUBE</h2>
        <Item>
          <FaYoutube size={24} color="#909090" />
          YouTube Premium
        </Item>
        <Item>
          <MdLocalMovies size={24} color="#909090" />
          Filmes
        </Item>
        <Item>
          <FaGamepad size={24} color="#909090" />
          Jogos
        </Item>
        <Item>
          <CgMediaLive size={24} color="#909090" />
          Ao vivo
        </Item>
        <Item>
          <GiBedLamp size={24} color="#909090" />
          Aprender
        </Item>
        <Item>
          <FaTrophy size={24} color="#909090" />
          Esportes
        </Item>
      </Box>
      <Box>
        <Item>
          <MdSettings size={24} color="#909090" />
          Configurações
        </Item>
        <Item>
          <MdFlag size={24} color="#909090" />
          Histórico de denúncias
        </Item>
        <Item>
          <MdHelp size={24} color="#909090" />
          Ajuda
        </Item>
        <Item>
          <MdFeedback size={24} color="#909090" />
          Enviar feedback
        </Item>
      </Box>
      <Box>
        <div className="text-block">
          <div className="text">
            <span>Sobre</span>
            <span>Imprensa</span>
          </div>
          <span>Entre em contato</span>
          <span>Direitos autorais</span>
          <span>Criadores de conteúdo</span>
          <div className="text">
            <span>Publicidade</span>
            <span>Desenvolvedores</span>
          </div>
        </div>

        <div className="text-block">
          <div className="text">
            <span>Termos</span>
            <span>Privacidade</span>
          </div>
          <span>Política e segurança</span>
          <span>Como funciona o YouTube</span>
          <span>Testar os novos recuros</span>
        </div>

        <span>© 2021 Google LLC</span>
      </Box>
    </Container>
  );
}

export default Opened;