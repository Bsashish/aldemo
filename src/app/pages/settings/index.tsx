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

const CollapseTitle = styled.h1`
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

const StyledLabel = styled(Label)`
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

const RadioContainerDiv = styled.div`
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
  const [SettingSelect, setSettingSelect] = useState('');
  const [receiveNotification, SetReceiveNotification] = useState('sms');
  const [settingModal, setSettingModal] = useState(false);

  return (
    <StyledDiv>
      <Title title="Settings" />

      <StyledCard>
        <StyledCardBody>
          <CollapseTitle
            // title="Where to Receive Notifications"
            id="NotifierToggler"
            onClick={() =>
              setSettingSelect(prev =>
                prev === 'NotifierToggler' ? '' : 'NotifierToggler',
              )
            }
          >
            <VectorIcon src={images.Vector} alt="vector" />
            Where to Receive Notifications
            <Icon
              src={images.Path}
              alt="logo"
              className={SettingSelect === 'NotifierToggler' ? 'rotate' : ''}
            />
          </CollapseTitle>
          <StyledHr isActive={SettingSelect === 'NotifierToggler'} />
          <StyledUncontrolledCollapse toggler="#NotifierToggler">
            <RadioContainerDiv>
              <div>
                <StyledLabel check>
                  <StyledRadio
                    type="radio"
                    name="radio1"
                    value="sms"
                    defaultChecked
                    onClick={e => SetReceiveNotification(e.target.value)}
                  />{' '}
                  SMS
                </StyledLabel>
                <StyledLabel check>
                  <StyledRadio
                    type="radio"
                    name="radio1"
                    value="email"
                    onClick={e => SetReceiveNotification(e.target.value)}
                  />{' '}
                  Email
                </StyledLabel>
              </div>
              <div>
                <StyledButton onClick={() => setSettingModal(true)}>
                  Save
                </StyledButton>
              </div>
            </RadioContainerDiv>
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
                {/* Alert Setting */}
          <CollapseTitle
            id="AlertToggler"
            // setIsSelect('AlertToggler')}
            onClick={() =>
              setSettingSelect(prev =>
                prev === 'AlertToggler' ? '' : 'AlertToggler',
              )
            }
          >
            <VectorIcon src={images.Vector} alt="vector" />
            Alerts
            <Icon
              src={images.Path}
              alt="logo"
              className={SettingSelect === 'AlertToggler' ? 'rotate' : ''}
            />
          </CollapseTitle>
          <StyledHr isActive={SettingSelect === 'AlertToggler'} />
          <StyledUncontrolledCollapse toggler="#AlertToggler">
            <AlertSettings />
          </StyledUncontrolledCollapse>

                {/* Halt Setting */}
          <CollapseTitle
            id="HaltToggler"
            // onClick={() => setIsSelect('HaltToggler')}
            onClick={() =>
              setSettingSelect(prev =>
                prev === 'HaltToggler' ? '' : 'HaltToggler',
              )
            }
          >
            <VectorIcon src={images.Vector} alt="vector" />
            Halts
            <Icon
              src={images.Path}
              alt="logo"
              className={SettingSelect === 'HaltToggler' ? 'rotate' : ''}
            />
          </CollapseTitle>
          <StyledHr isActive={SettingSelect === 'HaltToggler'} />
          <StyledUncontrolledCollapse toggler="#HaltToggler">
            <HaltsSettings />
          </StyledUncontrolledCollapse>
        </StyledCardBody>
      </StyledCard>

      <SettingModal setModal={setSettingModal} modal={settingModal} />
    </StyledDiv>
  );
};

export default SettingsPage;
