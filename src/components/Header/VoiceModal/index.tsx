import React, { forwardRef, useCallback, useImperativeHandle, useState } from 'react';

import { FiX } from 'react-icons/fi';
import { IoMdMic } from 'react-icons/io';

import { Container, Wrapper } from './styles';

export interface ModalHandles {
  openModal: () => void;
}

const VoiceModal: React.ForwardRefRenderFunction<ModalHandles> = (props, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  useImperativeHandle(ref, () => {
    return {
      openModal,
    }
  });

  const handleCloseModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <Container isOpen={isOpen}>
      <Wrapper>
        <div>
          <div>
            <h1>Pesquisar com sua voz</h1>
            <span>Para pesquisar por voz, acesse as configurações do seu navegador e permita o acesso ao microfone.</span>
          </div>
          <FiX size={24} color="#909090" />
        </div>

        <button>
          <IoMdMic size={24} color="#fff" />
        </button>
      </Wrapper>
    </Container>
  );
}

export default forwardRef(VoiceModal);