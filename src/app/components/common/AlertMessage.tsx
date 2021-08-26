import React from "react";
import styled from "styled-components"
import theme from "styles/theme";

type StyledAlertMessageType = {
    textColor?: string;
    valueColor?: string;
    btnColor?: string;
    btnTextColor?: string;
}

type AlertMessage = {
    icon?: any;
    text?: string;
    textColor?: string;
    value?: string;
    valueColor?: string;
    btnColor?: string;
    btnText?: string;
    btnTextColor?: string;
}

const StyledAlertMessage = styled.p<StyledAlertMessageType>`
  margin: 0;
  color: ${({ theme }) => theme.colors.darkBlue};
  font-weight: 600;
  font-size: 1em;

  .text {
    color: ${({ textColor }) => textColor || "inherit"};
  }
  .value {
    color: ${({ valueColor }) => valueColor || "inherit"};
  }
`;

const StyledButton = styled.button<StyledAlertMessageType>`
  border: 0;
  border-radius: 8px;
  padding: ${({ theme }) => `${theme.spacing.small} ${theme.spacing.medium}`};
  background-color: ${({ btnColor }) => btnColor};
  color: ${({ btnTextColor }) => btnTextColor};
`;

export const AlertMessage:React.FC<AlertMessage> = ({
  icon: Icon,
  text,
  textColor,
  value,
  valueColor,
  btnColor,
  btnText,
  btnTextColor
}) => {
  return (
    <StyledAlertMessage
      textColor={textColor}
      valueColor={valueColor}
      btnColor={btnColor}
      btnTextColor={btnTextColor}
    >
      {Icon && <Icon />} &nbsp;
      <span className="text">{text}</span> &nbsp;
      <span className="value">{value}</span> &nbsp;
      {btnText && <StyledButton btnColor={btnColor}>{btnText}</StyledButton>}
    </StyledAlertMessage>
  );
};