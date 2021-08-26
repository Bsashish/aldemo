import { useState } from 'react';
import { Title } from '../../components/common/Title';
import styled from "styled-components";
import { Badge,CustomInput } from 'reactstrap';

type BadgeProps = {
    isColor?: boolean;
}

const Badges = styled(Badge) <BadgeProps>`
background: ${({ theme, isColor }) => isColor ? theme.colors.darkBlue : theme.colors.green};
border-radius: .7rem;
`;

const Span = styled.span`
color:darkblue;
margin-left:40px;
`;

const Div = styled.div`
display:flex;
justify-content: space-between;
padding-bottom: 20px;

`;

const Value = styled.span`
color:darkblue;
margin-left: 10px;
`;
const Links = styled.p`
color:green;
font-weight: bold;
text-decoration: underline;
display: inline;
`;
const CheckBoxWrapper = styled.div`
  position: relative;
`;
const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
      background: #4fbe79;
      &::after {
        content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;
const HorizontalLine = styled.hr`
background-color: #fff;
background-image: linear-gradient(to right, #bcbaba 68%, rgb(167 163 163 / 0%) 0%);
background-position: bottom;
background-size: 25px 14px;
background-repeat: repeat-x;
`;
export const AlertSettings = () => {
    const [defaults, setDefaults] = useState(true);
    const [update, setUpdate] = useState(false);
    let element = [
        {
            alertName: 'Pre Market',
            volume: '1000',
            movementThreshold: '5%',
            minimumMovement: '20%',
            id: '1'
        },
        {
            alertName: 'Pre Market',
            volume: '1000',
            movementThreshold: '5%',
            minimumMovement: '20%',
            id: '2'
        },
        {
            alertName: 'Pre Market',
            volume: '1000',
            movementThreshold: '5%',
            minimumMovement: '20%',
            id: '3'
        }]
    return (
        <div className="mx-4">
            {element.map((item) => (

                <div>
                    <div style={{ paddingBottom: '20px' }}>
                        <Badges isColor={!update}>{update ? "Customized":" default" }</Badges>
                        <Span >{`${item.alertName} Alerts`} </Span>
                        <span style={{ float: 'right' }}>
                            <CheckBoxWrapper>
                                <CheckBox id="checkbox" type="checkbox" />
                                <CheckBoxLabel htmlFor="checkbox" />
                            </CheckBoxWrapper>
                            {/* <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch" /> */}

                        </span>
                    </div>
                    <Div>
                        <div>
                            <span>volume:</span>
                            <Value>{item.volume}</Value>
                        </div>
                        <div>
                            <span>Movement Threshold:</span>
                            <Value>{item.movementThreshold}</Value>
                        </div>
                        <div>
                            <span>Minimum Movement:</span>
                            <Value>{item.minimumMovement}</Value>
                        </div>
                    </Div>
                    <div >
                        <Links onClick={() => {  setUpdate(!update) }}>{update ? "Update" : "Customize"}</Links>
                    </div>
                    <HorizontalLine />
                </div>

            )
            )}



        </div>
    );
};