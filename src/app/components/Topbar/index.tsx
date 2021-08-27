import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import styled from 'styled-components';
import colors from 'utils/colors';

const StyledDropdownToggle = styled(DropdownToggle)`
  background-color: ${colors.offWhite} !important;
  border: 0 !important;
  color: ${colors.darkBlue} !important;
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
  box-shadow: none !important;
  height: 65px;
  padding: 0px;

  img {
    border-radius: 10px;
    height: 40px;
    margin: 10px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 65px;
  background: ${colors.offWhite};
  padding-left: 20px;
  padding-right: 20px;

  p {
    margin: 0;
  }
`;

const DropDown = props => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <StyledDropdownToggle caret={false}>
        <img src="https://picsum.photos/45" alt="profile" />
        Myroslav &or;
      </StyledDropdownToggle>
      <DropdownMenu>
        <DropdownItem>Myroslav</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

const Topbar = () => {
  return (
    <Header>
      <p>You are credited with 2,000 Alerts</p>
      <DropDown />
    </Header>
  );
};

export default Topbar;
