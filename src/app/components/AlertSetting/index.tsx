import React, { useState } from 'react';
import styled from 'styled-components';
import { Badge } from 'reactstrap';
import Switch from 'react-switch';
import ReactTooltip from 'react-tooltip';

type BadgeProps = {
  isColor?: boolean;
};

const Badges = styled(Badge)<BadgeProps>`
  background: ${({ theme, isColor }) =>
    isColor ? theme.colors.darkBlue : theme.colors.peach};
  border-radius: 0.7rem;
  font-weight: 400;
`;

const AlertItem = styled.span`
  color: ${({ theme }) => theme.colors.darkBlue};
  margin-left: 15px;
  font-weight: bold;
`;

const PropertyStyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Div = styled.div`
  display: flex;
`;
const Value = styled.span`
  color: ${({ theme }) => theme.colors.darkBlue};
  margin-left: 10px;
`;

const Property = styled.span`
  color: ${({ theme }) => theme.colors.darkGrey};
`;

const Links = styled.p`
  color: ${({ theme }) => theme.colors.green};
  font-weight: bold;
  text-decoration: underline;
  display: inline;
`;

const HorizontalLine = styled.hr`
  background-color: #fff;
  background-image: linear-gradient(
    to right,
    #bcbaba 68%,
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
  font-style: normal !important;
  text-transform: uppercase !important;
`;

const SwitchSpan = styled.span`
  float: right;
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

const DivStyle = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
`;

const AlertSettingComponent = ({ element }) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  const handleChecked = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <div>
        <DivStyle>
          <Badges isColor={!isUpdate}>
            {isUpdate ? 'Customized' : ' Default'}
          </Badges>
          <AlertItem>{`${element.alertName} Alerts`} </AlertItem>

          <SwitchSpan>
            <StyledTooltip
              data-for="tooltip"
              data-tip="You've useed up your alerts ceadits Buy more to continue "
            >
              <Switch
                checked={isChecked}
                onChange={handleChecked}
                uncheckedIcon={<SwitchStyle>OFF</SwitchStyle>}
                checkedIcon={<SwitchStyle>ON</SwitchStyle>}
                className="react-switch"
                id="small-radius-switch"
              />
            </StyledTooltip>
          </SwitchSpan>
        </DivStyle>
        <PropertyStyle>
          <Div>
            <Property>Volume:</Property>
            <Value>{element.volume}</Value>
            <StyledTooltip data-for="tooltip" data-tip="Volume">
              i
            </StyledTooltip>
          </Div>
          <Div>
            <Property>Movement Threshold:</Property>
            <Value>{element.movementThreshold}</Value>
            <StyledTooltip data-for="tooltip" data-tip="Movement Threshold">
              i
            </StyledTooltip>
          </Div>
          <Div>
            <Property>Minimum Movement:</Property>
            <Value>{element.minimumMovement}</Value>
            <StyledTooltip data-for="tooltip" data-tip="Minimum Movement">
              i
            </StyledTooltip>
          </Div>
        </PropertyStyle>
        <div>
          <Links
            onClick={() => {
              setIsUpdate(!isUpdate);
            }}
          >
            {isUpdate ? 'Update' : 'Customize'}
          </Links>
        </div>
        <HorizontalLine />
      </div>
      <ReactTooltip
        id="tooltip"
        className="tooltip"
        place="bottom"
        effect="solid"
        textColor="#FFFFFF"
        backgroundColor="#7C8DA6"
      />
    </div>
  );
};
export default AlertSettingComponent;
