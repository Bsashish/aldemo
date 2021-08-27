import { useState } from 'react';
import { Button, Modal, ModalBody } from 'reactstrap';
import styled from 'styled-components';

const CloseButton = styled.span`
  font-size: xx-large;
  display: block;
  text-align: end;
`;

//Modal modal-content
const ModalComp = styled(Modal)`
  border-radius: 50px;
`;

const ModalComBody = styled(ModalBody)`
  text-align: center;
`;
const ButtonRow = styled.div`
  display: flex;
  justify-content: space-around;
`;
type ButtonProps = {
  name?: string;
};

const StyleButton = styled(Button)<ButtonProps>`
  color: ${({ theme, name }) => name === 'cancel' && theme.colors.green};
  background-color: ${({ theme, name }) => name === 'cancel' && '#fff'};

  color: ${({ theme, name }) => name === 'save' && '#fff'};
  background-color: ${({ theme, name }) =>
    name === 'save' && theme.colors.green};

  border: 2px solid ${({ theme }) => theme.colors.green};
  border-radius: 8px;
`;
const ModalTitle = styled.h6`
  font-weight: bolder;
  color: ${({ theme }) => theme.colors.darkBlue};
  margin-bottom: 1.5rem;
`;

const ModalMessage = styled.p`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: smaller;
  margin-bottom: 2rem;
`;

const ModalStyle = styled.div`
  padding: 0rem 2rem 2rem 2rem;
`;


export const SettingModal = ({ modal, setModal }) => {
  const toggle = () => setModal(!modal);
  return (
    <ModalComp isOpen={modal} toggle={toggle} centered="true" size="md">
      <ModalComBody>
        <CloseButton onClick={toggle}>⨯</CloseButton>
        <ModalStyle>
          <ModalTitle>Are you sure you want to change your setting?</ModalTitle>
          <ModalMessage>
            When you change these settings, it will change when and how often
            you receive Alurts. With great power comes great responsibility
          </ModalMessage>
          <ButtonRow>
            <StyleButton name="cancel" onClick={toggle}>Cancel</StyleButton>
            <StyleButton name="save">Save Changes</StyleButton>
          </ButtonRow>
        </ModalStyle>
      </ModalComBody>
    </ModalComp>
  );
};
