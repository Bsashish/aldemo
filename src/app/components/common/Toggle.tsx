import styled from 'styled-components';

type StyledLabelType = {
  current?: string;
  label?: string;
};

const getCurrentData = (current, color) => {
  switch (current) {
    case 'Pre Market':
    case 'Intraday':
    case 'Post Market':
      return { bg: color.darkBlue, text: color.white, fw: 600 };
    default:
      return { bg: '#fff', text: color.darkGrey, fw: 500 };
  }
};

const StyledLabel = styled.label<StyledLabelType>`
  background-color: ${({ current, label, theme }) =>
    current === label
      ? getCurrentData(current, theme.colors).bg
      : getCurrentData('', '').bg};
  color: ${({ current, label, theme }) =>
    current === label
      ? getCurrentData(current, theme.colors).text
      : getCurrentData('', '').text};
  padding: 14px 54px;
  border-radius: ${({ current, label }) => current === label && '12px'};
  font-weight: ${({ current, label, theme }) =>
    current === label
      ? getCurrentData(current, theme.colors).fw
      : getCurrentData('', '').fw};

  &:first-child {
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
  }

  &:last-child {
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
  }
`;

const StyledVerticalLine = styled.div`
  width: 2px;
  height: 30px;
  background-color: rgba(0, 0, 0, 0.1);
  margin: 0 20px;
`;

const StyledToggle = styled.div`
  width: max-content;
  display: flex;
  align-items: center;
  border-radius: 12px;
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
