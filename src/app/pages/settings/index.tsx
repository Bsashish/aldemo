import { Title } from 'app/components/common';
import { useState } from 'react';
import { Card, CardBody, UncontrolledCollapse } from 'reactstrap';
import styled from 'styled-components';
import { AlertSettings } from './AlertSettings';
import HaltsSettings from './HaltsSetting';
import images from 'utils/images';
import NotificationSettings from './NotificationSettings';

const CollapseTitle = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.darkBlue};
  margin: 58px 0 0;
  display: flex;
  align-items: center;
`;

const StyledDiv = styled.div`
  padding: 0 1.5rem;
`;

const StyledCard = styled(Card)`
  border: 0;
  border-radius: 12px 12px 0px 0px;
  margin: 24px auto;
`;

const StyledCardBody = styled(CardBody)`
  padding: 12px 69px;
`;

type ActiveProps = {
  isActive?: boolean;
};

const StyledHr = styled.hr<ActiveProps>`
  padding: 0 1.5rem;
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.lightGreen : theme.colors.darkGrey};
  margin: 24px 0 30px;
  &:not([size]) {
    height: 1px;
  }
`;

//UncontrolledCollapse
const StyledUncontrolledCollapse = styled(UncontrolledCollapse)`
  padding-bottom: 10px;
`;

const VectorIcon = styled.img`
  height: 18px;
  padding-right: 13px;
  vertical-align: top;
`;

const Icon = styled.img<ActiveProps>`
  height: 10px;
  vertical-align: top;
  margin-left: auto;

  &.rotate {
    transform: rotate(180deg);
  }
`;

const SettingsPage = () => {
  const [settingSelect, setSettingSelect] = useState('');

  return (
    <StyledDiv>
      <Title title="Settings" />

      <StyledCard>
        <StyledCardBody>
          <CollapseTitle
            id="NotifierToggler"
            onClick={() =>
              setSettingSelect(prev =>
                prev === 'NotifierToggler' ? '' : 'NotifierToggler',
              )
            }
          >
            <VectorIcon src={images.LogoSmall} alt="vector" />
            Where to Receive Notifications
            <Icon
              src={images.Expand}
              alt="logo"
              className={settingSelect === 'NotifierToggler' ? 'rotate' : ''}
            />
          </CollapseTitle>
          <StyledHr isActive={settingSelect === 'NotifierToggler'} />
          <StyledUncontrolledCollapse toggler="#NotifierToggler">
            <NotificationSettings />
          </StyledUncontrolledCollapse>
          {/* Alert Setting */}
          <CollapseTitle
            id="AlertToggler"
            onClick={() =>
              setSettingSelect(prev =>
                prev === 'AlertToggler' ? '' : 'AlertToggler',
              )
            }
          >
            <VectorIcon src={images.LogoSmall} alt="vector" />
            Alerts
            <Icon
              src={images.Expand}
              alt="logo"
              className={settingSelect === 'AlertToggler' ? 'rotate' : ''}
            />
          </CollapseTitle>
          <StyledHr isActive={settingSelect === 'AlertToggler'} />
          <StyledUncontrolledCollapse toggler="#AlertToggler">
            <AlertSettings />
          </StyledUncontrolledCollapse>

          {/* Halt Setting */}
          <CollapseTitle
            id="HaltToggler"
            onClick={() =>
              setSettingSelect(prev =>
                prev === 'HaltToggler' ? '' : 'HaltToggler',
              )
            }
          >
            <VectorIcon src={images.LogoSmall} alt="vector" />
            Halts
            <Icon
              src={images.Expand}
              alt="logo"
              className={settingSelect === 'HaltToggler' ? 'rotate' : ''}
            />
          </CollapseTitle>
          <StyledHr isActive={settingSelect === 'HaltToggler'} />
          <StyledUncontrolledCollapse toggler="#HaltToggler">
            <HaltsSettings />
          </StyledUncontrolledCollapse>
        </StyledCardBody>
      </StyledCard>
    </StyledDiv>
  );
};

export default SettingsPage;
