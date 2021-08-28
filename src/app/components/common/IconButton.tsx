import { ReactElement, MouseEvent } from 'react';
import styled from 'styled-components';

interface IButtonProps {
  text: string;
  icon?: ReactElement;
  displayRightIcon?: boolean;
  disabled?: boolean;
  onClick?: (e: MouseEvent) => void;
}

export const IconButton = ({
  icon,
  text,
  displayRightIcon = true,
  disabled = false,
  onClick = () => {},
}: IButtonProps) => {
  return (
    <StyledIconButton onClick={onClick} disabled={disabled}>
      {icon && <StyledIconDiv>{icon}</StyledIconDiv>}
      <StyledTextDiv>
        {text}
        {displayRightIcon ? '  >' : ''}
      </StyledTextDiv>
    </StyledIconButton>
  );
};

const StyledIconButton = styled.button`
  border: 0;
  border-radius: 6px;
  background-color: white;
  padding: 0;
  display: flex;
  align-items: stretch;

  &:disabled {
    opacity: 0.4;
  }
`;

const StyledIconDiv = styled.div`
  border: 0;
  border-radius: 8px;
  color: white;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  padding: 12px;
  min-width: 3.5em;

  img {
    width: 30px;
  }
`;

const StyledTextDiv = styled.div`
  border: 0;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.darkBlue};
  padding: 12px;
  letter-spacing: 1.2px;
  font-size: 1.1em;
  font-weight: 600;
  min-width: 5em;
`;
