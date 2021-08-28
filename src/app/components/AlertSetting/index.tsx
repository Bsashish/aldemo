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

const PropertyContainer = styled.div`
  /* @media screen and (max-width: 767) {
    display: block;
    margin-left: 0;
  } */
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

const Div = styled.div`
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

const SwitchSpan = styled.div`
  //float: right;
`;

const StyledTooltip = styled.span`
  display: flex;
  align-items: center;
`;

const DivStyle = styled.div`
  padding-top: 20px;
  padding-bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

/**
    display: block;
    margin-left: 0; */

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
          <PropertyContainer>
            <Badges isColor={!isUpdate}>
              {isUpdate ? 'Customized' : ' Default'}
            </Badges>
            <AlertItem>{`${element.alertName} Alerts`} </AlertItem>
          </PropertyContainer>

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
              <IconInfo />
            </StyledTooltip>
          </Div>
          <Div>
            <Property>Movement Threshold:</Property>
            <Value>{element.movementThreshold}</Value>
            <StyledTooltip data-for="tooltip" data-tip="Movement Threshold">
              <IconInfo />
            </StyledTooltip>
          </Div>
          <Div>
            <Property>Minimum Movement:</Property>
            <Value>{element.minimumMovement}</Value>
            <StyledTooltip data-for="tooltip" data-tip="Minimum Movement">
              <IconInfo />
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
