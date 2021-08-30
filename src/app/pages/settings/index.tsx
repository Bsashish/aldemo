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
  cursor: pointer;
`;

const StyledDiv = styled.div`
  padding: 0 26px;
`;

const StyledCard = styled(Card)`
  border: 0;
  border-radius: 12px 12px 0px 0px;
  margin: 24px auto;
`;

const StyledCardBody = styled(CardBody)`
  padding: 12px 69px;
  @media screen and (max-width: 767px) {
    padding: 12px 20px;
  }
`;

type ActiveProps = {
  isActive?: boolean;
};

const StyledHr = styled.hr<ActiveProps>`
  padding: 0 26px;
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
  transform: rotate(180deg);

  &.rotate {
    transform: rotate(0deg);
  }
`;

const SettingsPage = () => {
  const [selectedSettings, setSelectedSttings] = useState<string[]>([]);

  const toggleSettingHandler = (prev, current) => {
    return prev.includes(current)
      ? prev.filter(setting => setting !== current)
      : [...prev, current];
  };

  return (
    <StyledDiv>
      <Title title="Settings" />

      <StyledCard>
        <StyledCardBody>
          <CollapseTitle
            id="NotifierToggler"
            onClick={() =>
              setSelectedSttings(prev =>
                toggleSettingHandler(prev, 'NotifierToggler'),
              )
            }
          >
            <VectorIcon src={images.LogoSmall} alt="vector" />
            Where to Receive Notifications
            <Icon
              src={images.Expand}
              alt="logo"
              className={
                selectedSettings.includes('NotifierToggler') ? 'rotate' : ''
              }
            />
          </CollapseTitle>
          <StyledHr isActive={selectedSettings.includes('NotifierToggler')} />
          <StyledUncontrolledCollapse toggler="#NotifierToggler">
            <NotificationSettings />
          </StyledUncontrolledCollapse>
          {/* Alert Setting */}
          <CollapseTitle
            id="AlertToggler"
            onClick={() =>
              setSelectedSttings(prev =>
                toggleSettingHandler(prev, 'AlertToggler'),
              )
            }
          >
            <VectorIcon src={images.LogoSmall} alt="vector" />
            Alerts
            <Icon
              src={images.Expand}
              alt="logo"
              className={
                selectedSettings.includes('AlertToggler') ? 'rotate' : ''
              }
            />
          </CollapseTitle>
          <StyledHr isActive={selectedSettings.includes('AlertToggler')} />
          <StyledUncontrolledCollapse toggler="#AlertToggler">
            <AlertSettings />
          </StyledUncontrolledCollapse>

          {/* Halt Setting */}
          <CollapseTitle
            id="HaltToggler"
            onClick={() =>
              setSelectedSttings(prev =>
                toggleSettingHandler(prev, 'HaltToggler'),
              )
            }
          >
            <VectorIcon src={images.LogoSmall} alt="vector" />
            Halts
            <Icon
              src={images.Expand}
              alt="logo"
              className={
                selectedSettings.includes('HaltToggler') ? 'rotate' : ''
              }
            />
          </CollapseTitle>
          <StyledHr isActive={selectedSettings.includes('HaltToggler')} />
          <StyledUncontrolledCollapse toggler="#HaltToggler">
            <HaltsSettings />
          </StyledUncontrolledCollapse>
        </StyledCardBody>
      </StyledCard>
    </StyledDiv>
  );
};

export default SettingsPage;
