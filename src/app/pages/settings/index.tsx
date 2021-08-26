import { Title } from 'app/components/common';
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
    / background-color: ${({ theme }) => theme.colors.green}; /
    border: 1px solid ${({ theme }) => theme.colors.green};
  }
`;

const StyledLabel1 = styled(Label)`
  font-size: large;
  font-weight: 500;
  line-height: 1.5em;
  padding-right: 50px;
`;

type HrProps = {
  isActive?: boolean;
};

const StyledHr = styled.hr<HrProps>`
  padding: 0 1.5rem;
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.green : theme.colors.darkGrey};
  margin-bottom: 30px;
  &:not([size]) {
    height: 2px;
  }
`;

const SettingsPage = () => {
  const [isSelect, setIsSelect] = useState('');
  // const [receiveNotification, SetReceiveNotification] = useState("sms")

  return (
    <StyledDiv>
      <Title title="Settings" />

      <StyledCard>
        <StyledCardBody>
          <StyledTitle1
            // title="Where to Receive Notifications"
            id="toggler"
            onClick={() => setIsSelect('toggler')}
          >Where to Receive Notifications</StyledTitle1>
          <StyledHr isActive={isSelect === 'toggler'} />
          <UncontrolledCollapse
            toggler="#toggler"
            style={{ paddingBottom: 30 }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingBottom: '30px',
              }}
            >
              <div>
                <StyledLabel1 check>
                  <StyledRadio
                    type="radio"
                    name="radio1"
                    value="sms"
                    defaultChecked
                    // onClick={(e) => SetReceiveNotification(e.target.value) }
                  />{' '}
                  SMS
                </StyledLabel1>
                <StyledLabel1 check>
                  <StyledRadio
                    type="radio"
                    name="radio1"
                    value="email"
                    // onClick={(e) => SetReceiveNotification(e.target.value) }
                  />{' '}
                  Email
                </StyledLabel1>
              </div>
              <div>
                <StyledButton>Save</StyledButton>
              </div>
            </div>
            <div>
              <span style={{ color: colors.darkGrey }}>
                We will send you an email at{' '}
                <span style={{ color: colors.darkGrey, fontWeight: 'bold' }}>
                  tyler@alurts.net
                </span>{' '}
                when something{' '}
                <span style={{ color: colors.lightGreen, fontWeight: 'bold' }}>
                  interesting*
                </span>{' '}
                happens.
              </span>
            </div>
          </UncontrolledCollapse>

          <StyledTitle1
            // title="Alerts"
            id="toggler1"
            onClick={() => setIsSelect('toggler1')}
          >Alerts</StyledTitle1>
          <StyledHr isActive={isSelect === 'toggler1'} />
          <UncontrolledCollapse
            toggler="#toggler1"
            style={{ paddingBottom: 30 }}
          >
            <AlertSettings />
          </UncontrolledCollapse>

          <StyledTitle1
            // title="Halts"
            id="toggler2"
            onClick={() => setIsSelect('toggler2')}
          > Halts
              </StyledTitle1>
          <StyledHr isActive={isSelect === 'toggler2'} />
          <UncontrolledCollapse toggler="#toggler2"></UncontrolledCollapse>
        </StyledCardBody>
      </StyledCard>
    </StyledDiv>
  );
};

export default SettingsPage;