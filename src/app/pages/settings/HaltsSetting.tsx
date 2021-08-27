import styled from 'styled-components';
import { Badge } from 'reactstrap';
import { useState } from 'react';
import Switch from 'react-switch';
import ReactTooltip from 'react-tooltip';

const StyledDiv = styled.div`
  padding: 0 1.5rem;
`;

type BadgeProps = {
  isColor?: boolean;
};

const Badges = styled(Badge)<BadgeProps>`
  background: ${({ theme, isColor }) =>
    isColor ? theme.colors.darkBlue : theme.colors.green};
  border-radius: 0.7rem;
`;

const Span = styled.span`
  color: ${({ theme }) => theme.colors.darkBlue};
  margin-left: 40px;
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0px;
`;

const Property = styled.span`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-weight: bold;
`;

const HorizontalLine = styled.hr`
  background-color: #fff;
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.darkGrey} 68%,
    rgb(167 163 163 / 0%) 0%
  );
  background-position: bottom;
  background-size: 25px 14px;
  background-repeat: repeat-x;
`;

const SwitchStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  height: 100%;
  color: ${({ theme }) => theme.colors.white};
  padding-right: 2px;
`;

const DivContainer = styled.div`
  padding-bottom: 30px;
`;

const Links = styled.p`
  color: ${({ theme }) => theme.colors.green};
  font-weight: bold;
  text-decoration: underline;
  / display: inline; /
  margin-top: 30px;
`;

const StyledTooltip = styled.span`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.darkGrey};
  font-style: italic;
  text-transform: lowercase;
  border-radius: 50%;
  font-size: smaller;
  margin-left: 10px;
`;

const DivFlex = styled.div`
  display: flex;
`;

const HaltsSettings = () => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <StyledDiv>
      <DivContainer>
        <Badges isColor={!isUpdate}>
          {isUpdate ? 'Customized' : ' default'}
        </Badges>
        <Span>Intraday Halts </Span>
        <span style={{ float: 'right' }}>
          <Switch
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            uncheckedIcon={<SwitchStyle>OFF</SwitchStyle>}
            checkedIcon={<SwitchStyle>ON</SwitchStyle>}
            className="react-switch"
            id="small-radius-switch"
          />
        </span>
      </DivContainer>
      <Div>
        <DivFlex>
          <Property>Direction</Property>
          <StyledTooltip data-for="tooltip" data-tip="Direction">
            i
          </StyledTooltip>
        </DivFlex>
        <div>
          <span>Upwards</span>
        </div>
      </Div>
      <HorizontalLine />
      <Div>
        <DivFlex>
          <Property>Volume</Property>
          <StyledTooltip data-for="tooltip" data-tip="Volume">
            i
          </StyledTooltip>
        </DivFlex>
        <div>
          <span>50,000</span>
        </div>
      </Div>
      <Links
        onClick={() => {
          setIsUpdate(!isUpdate);
        }}
      >
        {isUpdate ? 'Update' : 'Customize'}
      </Links>
      <ReactTooltip
        id="tooltip"
        className="tooltip"
        place="bottom"
        textColor="#FFFFFF"
        backgroundColor="#7C8DA6"
      />
    </StyledDiv>
  );
};

export default HaltsSettings;
