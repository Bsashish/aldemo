import { Button, Modal, ModalBody } from 'reactstrap';
import styled from 'styled-components';

const CloseButton = styled.span`
  font-size: 35px;
  text-align: end;
  padding-bottom: 20px;
  padding-right: 10px;
  cursor: pointer;
  position: absolute;
  right: 19px;
  top: 5px;
  padding: 0;
  line-height: 50px;
`;

//Modal modal-content
const ModalComp = styled(Modal)`
  justify-content: center;
  .modal-content {
    border-radius: 16px;
    width: 100%;
    max-width: 565px;
  }
`;

const ModalComBody = styled(ModalBody)`
  text-align: center;
  padding: 80px 8px 30px;
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

  height: 64px;
  width: 160px;
  font-size: large;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 30px;
  }
`;

const ButtonContainerDiv = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 375px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const ModalTitle = styled.h5`
  font-weight: bolder;
  color: ${({ theme }) => theme.colors.darkBlue};
  margin-bottom: 26px;
`;

const ModalMessage = styled.p`
  color: ${({ theme }) => theme.colors.darkGrey};
  //margin: 0 3rem 4rem 3rem;
  margin: 0 auto 50px;
  max-width: 440px;
`;

const ModalStyle = styled.div`
  padding: 0rem 2rem 2rem 2rem;
`;

export const SettingModal = ({ modal, setModal }) => {
  const toggle = () => setModal(!modal);
  return (
    <ModalComp isOpen={modal} toggle={toggle} centered="true" size="lg">
      <ModalComBody>
        <CloseButton onClick={toggle}>⨯</CloseButton>
        <ModalStyle>
          <ModalTitle>Are you sure you want to change your setting?</ModalTitle>
          <ModalMessage>
            When you change these settings, it will change when and how often
            you receive Alurts. With great power comes great responsibility
          </ModalMessage>
          <ButtonContainerDiv>
            <StyleButton name="cancel" onClick={toggle}>
              Cancel
            </StyleButton>
            <StyleButton name="save">Save Changes</StyleButton>
          </ButtonContainerDiv>
        </ModalStyle>
      </ModalComBody>
    </ModalComp>
  );
};
