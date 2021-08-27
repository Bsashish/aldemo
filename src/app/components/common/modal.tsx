import { Button, Modal, ModalBody } from 'reactstrap';
import styled from 'styled-components';

const CloseButton = styled.span`
  font-size: xx-large;
  display: block;
  text-align: end;
  padding-bottom: 20px;
  padding-right: 10px;
  cursor: pointer;
`;

//Modal modal-content
const ModalComp = styled(Modal)`
  width: 45%;
  .modal-content {
    border-radius: 1rem;
    width: 40rem;
  }
`;

const ModalComBody = styled(ModalBody)`
  text-align: center;
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

  height: 4rem;
  width: 10rem;
  font-size: large;
  font-weight: bold;
`;
const ModalTitle = styled.h5`
  font-weight: bolder;
  color: ${({ theme }) => theme.colors.darkBlue};
  margin-bottom: 1.5rem;
`;

const ModalMessage = styled.p`
  color: ${({ theme }) => theme.colors.darkGrey};
  margin: 0 3rem 4rem 3rem;
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
          <div>
            <StyleButton
              name="cancel"
              onClick={toggle}
              style={{ marginRight: '3rem' }}
            >
              Cancel
            </StyleButton>
            <StyleButton name="save">Save Changes</StyleButton>
          </div>
        </ModalStyle>
      </ModalComBody>
    </ModalComp>
  );
};
