import { useState } from 'react';
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import styled from 'styled-components';

type ItemType = {
    text: string,
    iconActive: string,
    iconInActive: string,
}

type ItemsType = {
    items: ItemType[]
}

export const ProfileDropdown = ({ items }: ItemsType) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [hoveredItemId, setHoveredItemId] = useState<number>(-1);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <StyledDropdownToggle caret={false}>
                <img src="https://picsum.photos/45" alt="profile" />
                <p>Myroslav &or;</p>
            </StyledDropdownToggle>
            <StyledDropdownMenu>
                {
                    items.map(({ text, iconActive, iconInActive }, index) => (
                        <>
                            <StyledDropdownItem
                                onMouseEnter={() => setHoveredItemId(index)}
                                onMouseLeave={() => setHoveredItemId(-1)}
                            >
                                {hoveredItemId === index ? <img src={iconActive} alt="active" /> : <img src={iconInActive} alt="inactive" />} &nbsp; {text}
                            </StyledDropdownItem>
                            {items.length - 1 !== index && <StyledDivider divider />}
                        </>
                    ))
                }
            </StyledDropdownMenu>
        </Dropdown>
    );
};

const StyledDropdownToggle = styled(DropdownToggle)`
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.offWhite} !important;
    border: 0 !important;
    color: ${({ theme }) => theme.colors.darkBlue} !important;
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

  @media screen and (max-width: 768px) {
    display: none;
  }
}
`;

const StyledDropdownMenu = styled(DropdownMenu)`
  right: 0;
  top: 65px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const StyledDropdownItem = styled(DropdownItem)`
  font-weight: 600;

  img {
      height: 25px;
  }

  &:active, &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.green};
  }
`;

const StyledDivider = styled(DropdownItem)`
  border-color: ${({ theme }) => theme.colors.midGrey};
`;
