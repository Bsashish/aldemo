import styled from 'styled-components';

type StyledLabelType = {
  current?: string;
  label?: string;
};

const StyledLabel = styled.label<StyledLabelType>`
  background-color: ${({ current, label, theme }) =>
    current === label ? theme.colors.darkBlue : theme.colors.white};
  color: ${({ current, label, theme }) =>
    current === label ? theme.colors.white : theme.colors.darkGrey};
  padding: ${({ theme }) => `${theme.spacing.large} 56px`};
  border-radius: ${({ current, label }) => current === label && '12px'};
  font-weight: ${({ current, label, theme }) =>
    current === label ? 600 : 500};
  text-align: center;

  &:first-child {
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
  }

  &:last-child {
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
  }

  @media screen and (max-width: 768px) {
    padding: ${({ theme }) =>
      `${theme.spacing.normal} ${theme.spacing.medium}`};
    font-size: 12px;
    width: 100%;
  }

  @media screen and (max-width: 375px) {
    &:first-child {
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
    }

    &:last-child {
      border-bottom-left-radius: 12px;
      border-bottom-right-radius: 12px;
    }
  }
`;

const StyledVerticalLine = styled.div`
  width: 2px;
  height: 30px;
  background-color: rgba(0, 0, 0, 0.1);
  margin: ${({ theme }) => `0 ${theme.spacing.xl}`};

  @media screen and (max-width: 768px) {
    margin: ${({ theme }) => `0 ${theme.spacing.normal}`};
  }

  @media screen and (max-width: 375px) {
    margin: ${({ theme }) => `${theme.spacing.normal} 0`};
    width: 75%;
    height: 2px;
  }
`;

const StyledToggle = styled.div`
  width: max-content;
  display: flex;
  align-items: center;
  border-radius: 12px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  @media screen and (max-width: 375px) {
    flex-direction: column;
  }
`;

export const Toggle = ({ items, current, setCurrent }) => (
  <StyledToggle
    className="btn-group btn-group-toggle bg-white"
    data-toggle="buttons"
  >
    {items.map((item, index) => (
      <>
        <StyledLabel
          current={current}
          label={item}
          onClick={() => setCurrent(item)}
        >
          {item}
        </StyledLabel>
        {items.length - 1 !== index && <StyledVerticalLine />}
      </>
    ))}
  </StyledToggle>
);
