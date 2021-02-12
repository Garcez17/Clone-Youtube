import React, { useState } from 'react';

import { MdHome, MdSubscriptions, MdVideoLibrary } from 'react-icons/md';
import { RiFireFill } from 'react-icons/ri';

import { Container, Item } from './styles';

const Closed: React.FC = () => {
  const [isSelected, setIsSelected] = useState(true);
  
  return (
    <Container>
      <Item>
        <MdHome size={24} color="#909090" />
        <span>Início</span>
      </Item>
      <Item>
        <RiFireFill size={24} color="#909090" />
        <span>Em alta</span>
      </Item>
      <Item>
        <MdSubscriptions size={24} color={isSelected ? "#fff" : "#909090"} />
        <span>Inscrições</span>
      </Item>
      <Item>
        <MdVideoLibrary size={24} color="#909090" />
        <span>Biblioteca</span>
      </Item>
    </Container>
  );
}

export default Closed;