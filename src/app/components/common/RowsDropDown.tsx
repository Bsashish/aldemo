import { Fragment, useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import styled from 'styled-components';
import images from 'utils/images';

type ItemType = number;

type ItemsType = {
  items: ItemType[];
};

export const RowsDropdown = ({ items }: ItemsType) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selected, setSelected] = useState<number>(10);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <StyledDropdown isOpen={dropdownOpen} toggle={toggle}>
      <p>Show rows</p>
      <StyledDropdownToggle caret={false}>
        <p>{selected}</p>
        <img className="icon-expand" src={images.Expand} alt="icon" />
      </StyledDropdownToggle>
      <StyledDropdownMenu>
        {items.map((item, index) => (
          <Fragment key={index}>
            <StyledDropdownItem onClick={() => setSelected(item)}>
              {item}
            </StyledDropdownItem>
          </Fragment>
        ))}
      </StyledDropdownMenu>
    </StyledDropdown>
  );
};

const StyledDropdown = styled(Dropdown)`
    display: flex;
    align-items: center;

    p:first-of-type {
        color: ${({ theme }) => theme.colors.darkGrey};
        font-weight: 600;
        margin: 0;
        margin-right: ${({ theme }) => theme.spacing.large};
    }
`

const StyledDropdownToggle = styled(DropdownToggle)`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white} !important;
  border: 0 !important;
  color: ${({ theme }) => theme.colors.darkBlue} !important;
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
  box-shadow: none !important;
  padding: ${({ theme }) => theme.spacing.large};
  border-radius: 12px;

  .icon-expand {
    height: 10px;
    transform: rotate(180deg);
  }

  p {
    margin: 0;
    padding-right: ${({ theme }) => theme.spacing.medium};
  }
`;

const StyledDropdownMenu = styled(DropdownMenu)`
  min-width: max-content;
  max-width: max-content;
  right: 0;
  top: 10px !important;
  background-color: ${({ theme }) => theme.colors.white};
  border: 0;
  padding: ${({ theme }) => theme.spacing.large};
  border-radius: 12px;
`;

const StyledDropdownItem = styled(DropdownItem)`
max-width: max-content;
  font-weight: 600;
  margin: 0;
  padding: ${({ theme }) => theme.spacing.large};
  text-align: center;

  &:active,
  &:hover {
    background-color: ${({ theme }) => theme.colors.darkGrey}20;
    border-radius: 12px;
  }
`;
