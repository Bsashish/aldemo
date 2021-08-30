import styled from 'styled-components';
import { Button, Input, Label } from 'reactstrap';
import { useState } from 'react';
import colors from 'utils/colors';
import { SettingModal } from 'app/components/common';

const NotificationOptions = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 30px;
  flex-wrap: wrap;
`;

const StyledLabel = styled(Label)`
  font-size: large;
  font-weight: 500;
  line-height: 26px;
  padding-right: 50px;
`;

const StyledButton = styled(Button)`
  padding: 5px 8px;
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: 200px;
  border-style: none;
`;

const StyledRadio = styled(Input).attrs(() => ({ type: 'radio' }))`
  &:checked {
    background-color: ${({ theme }) => theme.colors.green};
    border-color: ${({ theme }) => theme.colors.green};
  }
`;

const NotificationSettings = () => {
  const [receiveNotification, setReceiveNotification] = useState('sms');
  const [settingModal, setSettingModal] = useState(false);

  return (
    <div className="ms-4">
      <NotificationOptions>
        <div>
          <StyledLabel check>
            <StyledRadio
              type="radio"
              name="notification_option"
              value="sms"
              defaultChecked
              onClick={e => setReceiveNotification(e.target.value)}
            />{' '}
            SMS
          </StyledLabel>
          <StyledLabel check>
            <StyledRadio
              type="radio"
              name="notification_option"
              value="email"
              onClick={e => setReceiveNotification(e.target.value)}
            />{' '}
            Email
          </StyledLabel>
        </div>
        <div>
          <StyledButton onClick={() => setSettingModal(true)}>
            Save
          </StyledButton>
        </div>
      </NotificationOptions>
      {receiveNotification === 'email' && (
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
      )}
      {receiveNotification === 'sms' && (
        <span style={{ color: colors.darkGrey }}>
          We will send you a text message at{' '}
          <span style={{ color: colors.darkGrey, fontWeight: 'bold' }}>
            +1 (202)-555-0108
          </span>{' '}
          when something{' '}
          <span style={{ color: colors.lightGreen, fontWeight: 'bold' }}>
            interesting*
          </span>{' '}
          happens.
        </span>
      )}

      <SettingModal setModal={setSettingModal} modal={settingModal} />
    </div>
  );
};

export default NotificationSettings;
