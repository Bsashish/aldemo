import React from 'react';
import styled from 'styled-components';

const StyledAlertMessage = styled.p`
  margin: 0;
  color: black;
  font-weight: 600;

  span:nth-child(2) {
    color: ${({ textColor }) => textColor || 'black'};
  }
  span:nth-child(3) {
    color: ${({ valueColor }) => valueColor || 'black'};
  }
  button {
    border: 0;
    border-radius: 8px;
    padding: 4px 12px;
    background-color: ${({ btnColor }) => btnColor};
    color: ${({ btnTextColor }) => btnTextColor};
  }
`;

const AlertMessage = ({
  icon: Icon,
  text,
  textColor,
  value,
  valueColor,
  btnColor,
  btnText,
  btnTextColor,
}) => {
  return (
    <StyledAlertMessage
      textColor={textColor}
      valueColor={valueColor}
      btnColor={btnColor}
      btnTextColor={btnTextColor}
    >
      <Icon /> &nbsp;
      <span>{text}</span> &nbsp;
      <span>{value}</span> &nbsp;
      {btnText && <button btnColor={btnColor}>{btnText}</button>}
    </StyledAlertMessage>
  );
};

export default AlertMessage;
