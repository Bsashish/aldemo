import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import styled, { useTheme } from 'styled-components';
import colors from 'utils/colors';
import { AlertMessage } from '../common';

const StyledDropdownToggle = styled(DropdownToggle)`
  display: flex;
  align-items: center;
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

  p {
    margin: 0;

    @media screen and (max-width: 500px) {
      display: none;
    }
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 65px;
  background: ${colors.offWhite};
  padding: 0 20px;

  p {
    margin: 0;
  }

  @media screen and (max-width: 500px) {
    padding: 0 10px;
  }
`;

const StyledDropdownMenu = styled(DropdownMenu)`
  right: 0;
  top: 65px;
`;

const DropDown = props => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <StyledDropdownToggle caret={false}>
        <img src="https://picsum.photos/45" alt="profile" />
        <p>Myroslav &or;</p>
      </StyledDropdownToggle>
      <StyledDropdownMenu>
        <DropdownItem>Myroslav</DropdownItem>
      </StyledDropdownMenu>
    </Dropdown>
  );
};

const StyleButton = styled.button`
  border: 0;
  border-radius: 4px;
`;

const Topbar = ({
  setIsOpen,
}: {
  setIsOpen: (isOpen: boolean | ((_: boolean) => boolean)) => void;
}) => {
  const { colors } = useTheme();

  return (
    <Header>
      {/* TODO: Change with ham burger menu icon */}
      <StyleButton
        className="sidebar-sm"
        onClick={() => setIsOpen((prev: boolean) => !prev)}
      >
        =
      </StyleButton>
      <AlertMessage
        text="ALERT CREDITS"
        value="2,000"
        valueColor={colors.green}
      />
      <DropDown />
    </Header>
  );
};

export default Topbar;
