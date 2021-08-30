import React, { useState } from 'react';
import styled from 'styled-components';
import { Badge } from 'reactstrap';
import Switch from 'react-switch';
import ReactTooltip from 'react-tooltip';
import { IconInfo } from '../common';

type BadgeProps = {
  isColor?: boolean;
};

const Badges = styled(Badge)<BadgeProps>`
  background: ${({ theme, isColor }) =>
    isColor ? theme.colors.darkBlue : theme.colors.peach};
  border-radius: 20px;
  font-weight: 400;
`;

const AlertItem = styled.span`
  color: ${({ theme }) => theme.colors.darkBlue};
  margin-left: 15px;
  font-weight: bold;
  @media screen and (max-width: 767px) {
    display: block;
    margin-left: 0;
  }
`;

const PropertyStyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 40px;
  flex-direction: row;
  flex-wrap: wrap;
  @media screen and (max-width: 992px) {
    flex-direction: column;
    padding-bottom: 20px;
  }
`;

const PropertyDiv = styled.div`
  display: flex;
  width: 33%;

  &:nth-child(2) {
    justify-content: center;
  }
  &:last-child {
    justify-content: flex-end;
  }

  @media screen and (max-width: 992px) {
    width: 100%;
    &:last-child {
      justify-content: flex-start;
    }
    &:nth-child(2) {
      justify-content: flex-start;
    }
  }
`;
const Value = styled.span`
  color: ${({ theme }) => theme.colors.darkBlue};
  margin: 0 0 0 10px;
`;

const Property = styled.span`
  color: ${({ theme }) => theme.colors.darkGrey};
`;

const Links = styled.p`
  color: ${({ theme }) => theme.colors.green};
  font-weight: bold;
  text-decoration: underline;
  display: inline;
  cursor: pointer;
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

const StyledAlertTooltip = styled.span`
  display: flex;
  align-items: center;
`;

const BadgesDiv = styled.div`
  padding-top: 20px;
  padding-bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
        <BadgesDiv>
          <div>
            <Badges isColor={!isUpdate}>
              {isUpdate ? 'Customized' : ' Default'}
            </Badges>
            <AlertItem>{`${element.alertName} Alerts`} </AlertItem>
          </div>

          <div>
            <StyledAlertTooltip
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
            </StyledAlertTooltip>
          </div>
        </BadgesDiv>
        <PropertyStyle>
          <PropertyDiv>
            <Property>Volume:</Property>
            <Value>{element.volume}</Value>
            <StyledAlertTooltip data-for="tooltip" data-tip="Volume">
              <IconInfo />
            </StyledAlertTooltip>
          </PropertyDiv>
          <PropertyDiv>
            <Property>Movement Threshold:</Property>
            <Value>{element.movementThreshold}</Value>
            <StyledAlertTooltip
              data-for="tooltip"
              data-tip="Movement Threshold"
            >
              <IconInfo />
            </StyledAlertTooltip>
          </PropertyDiv>
          <PropertyDiv>
            <Property>Minimum Movement:</Property>
            <Value>{element.minimumMovement}</Value>
            <StyledAlertTooltip data-for="tooltip" data-tip="Minimum Movement">
              <IconInfo />
            </StyledAlertTooltip>
          </PropertyDiv>
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
        <ReactTooltip
          id="tooltip"
          className="tooltip"
          place="bottom"
          effect="solid"
          textColor="#FFFFFF"
          backgroundColor="#7C8DA6"
        />
      </div>
    </div>
  );
};
export default AlertSettingComponent;
