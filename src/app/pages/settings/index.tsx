import { Title, SettingModal } from 'app/components/common';
import { useState } from 'react';
import {
  Card,
  CardBody,
  UncontrolledCollapse,
  Input,
  Label,
  Button,
} from 'reactstrap';
import styled from 'styled-components';
import colors from 'utils/colors';
import { AlertSettings } from './alert';
import HaltsSettings from './HaltsSetting';
import images from 'utils/images';

const StyledTitle1 = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.darkBlue};
  margin: 1.5rem 0;
`;

const StyledDiv = styled.div`
  padding: 0 1.5rem;
`;

const StyledCard = styled(Card)`
  border: 0;
  border-radius: 8px;
  margin: 24px auto;
`;

const StyledCardBody = styled(CardBody)`
  padding: 12px 32px;
`;

const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: 200px;
  border-style: none;
`;

const StyledRadio = styled(Input).attrs(() => ({ type: 'radio' }))`
  //color: ${({ theme }) => theme.colors.green};
  border: 1px solid ${({ theme }) => theme.colors.darkGrey};

  &:checked {
    / background-color: ${({ theme }) => theme.colors.green};  /
    border: 1px solid ${({ theme }) => theme.colors.green};
  }
`;

const StyledLabel1 = styled(Label)`
  font-size: large;
  font-weight: 500;
  line-height: 1.5em;
  padding-right: 50px;
`;

type ActiveProps = {
  isActive?: boolean;
};

const StyledHr = styled.hr<ActiveProps>`
  padding: 0 1.5rem;
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.green : theme.colors.darkGrey};
  margin-bottom: 30px;
  &:not([size]) {
    height: 2px;
  }
`;

const StyledDiv1 = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 30px;
  flex-wrap: wrap;
`;

//UncontrolledCollapse
const StyledUncontrolledCollapse = styled(UncontrolledCollapse)`
  / border-top: 2px solid ${({ theme }) => theme.colors.green}; /
  padding-bottom: 30px;
`;

const VectorIcon = styled.img`
  height: 25px;
  padding-right: 15px;
  vertical-align: top;
`;

const Icon = styled.img<ActiveProps>`
  height: 10px;
  vertical-align: top;
  float: right;

  &.rotate {
    transform: rotate(180deg);
  }
`;

const SettingsPage = () => {
  const [isSelect, setIsSelect] = useState('');
  const [receiveNotification, SetReceiveNotification] = useState('sms');
  const [modal, setModal] = useState(false);

  return (
    <StyledDiv>
      <Title title="Settings" />

      <StyledCard>
        <StyledCardBody>
          <StyledTitle1
            // title="Where to Receive Notifications"
            id="NotifierToggler"
            onClick={() =>
              setIsSelect(prev => (prev === 'NotifierToggler' ? '' : 'NotifierToggler'))
            }
          >
            <VectorIcon src={images.Vector} alt="vector" />
            Where to Receive Notifications
            <Icon
              src={images.Path}
              alt="logo"
              className={isSelect === 'NotifierToggler' ? 'rotate' : ''}
            />
          </StyledTitle1>
          <StyledHr isActive={isSelect === 'NotifierToggler'} />
          <StyledUncontrolledCollapse toggler="#NotifierToggler">
            <StyledDiv1>
              <div>
                <StyledLabel1 check>
                  <StyledRadio
                    type="radio"
                    name="radio1"
                    value="sms"
                    defaultChecked
                    onClick={e => SetReceiveNotification(e.target.value)}
                  />{' '}
                  SMS
                </StyledLabel1>
                <StyledLabel1 check>
                  <StyledRadio
                    type="radio"
                    name="radio1"
                    value="email"
                    onClick={e => SetReceiveNotification(e.target.value)}
                  />{' '}
                  Email
                </StyledLabel1>
              </div>
              <div>
                <StyledButton onClick={() => setModal(true)}>Save</StyledButton>
              </div>
            </StyledDiv1>
            <div>
              {receiveNotification === 'email' && (
                <span style={{ color: colors.darkGrey }}>
                  We will send you an email at{' '}
                  <span style={{ color: colors.darkGrey, fontWeight: 'bold' }}>
                    tyler@alurts.net
                  </span>{' '}
                  when something{' '}
                  <span
                    style={{ color: colors.lightGreen, fontWeight: 'bold' }}
                  >
                    interesting*
                  </span>{' '}
                  happens.
                </span>
              )}
              {receiveNotification === 'sms' && (
                <span style={{ color: colors.darkGrey }}>
                  We will send you a text message at{' '}
                  <span style={{ color: colors.darkGrey, fontWeight: 'bold' }}>
                    +1 (202)-555-0108
                  </span>{' '}
                  when something{' '}
                  <span
                    style={{ color: colors.lightGreen, fontWeight: 'bold' }}
                  >
                    interesting*
                  </span>{' '}
                  happens.
                </span>
              )}
            </div>
          </StyledUncontrolledCollapse>

          <StyledTitle1
            id="AlertToggler"
            // setIsSelect('AlertToggler')}
            onClick={() =>
              setIsSelect(prev => (prev === 'AlertToggler' ? '' : 'AlertToggler'))
            }
          >
            <VectorIcon src={images.Vector} alt="vector" />
            Alerts
            <Icon
              src={images.Path}
              alt="logo"
              className={isSelect === 'AlertToggler' ? 'rotate' : ''}
            />
          </StyledTitle1>
          <StyledHr isActive={isSelect === 'AlertToggler'} />
          <StyledUncontrolledCollapse toggler="#AlertToggler">
            <AlertSettings />
          </StyledUncontrolledCollapse>

          <StyledTitle1
            id="HaltToggler"
            // onClick={() => setIsSelect('HaltToggler')}
            onClick={() =>
              setIsSelect(prev => (prev === 'HaltToggler' ? '' : 'HaltToggler'))
            }
          >
            <VectorIcon src={images.Vector} alt="vector" />
            Halts
            <Icon
              src={images.Path}
              alt="logo"
              className={isSelect === 'HaltToggler' ? 'rotate' : ''}
            />
          </StyledTitle1>
          <StyledHr isActive={isSelect === 'HaltToggler'} />
          <StyledUncontrolledCollapse toggler="#HaltToggler">
            <HaltsSettings />
          </StyledUncontrolledCollapse>
        </StyledCardBody>
      </StyledCard>

      <SettingModal setModal={setModal} modal={modal} />
    </StyledDiv>
  );
};

export default SettingsPage;
