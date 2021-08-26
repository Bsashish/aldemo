import React, { useEffect, useState } from 'react';
import { NavItem, Nav } from 'reactstrap';
import images from 'utils/images';
import styled from 'styled-components';
import colors from 'utils/colors';
import sidebarItems from './SideBarItem';
import { useHistory } from 'react-router-dom';

const SideItem = styled(NavItem)`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  p {
    margin: 0;
    margin-left: 16px;
    color: ${colors.darkGrey};
  }

  img {
    height: 24px;
    width: 24px;
    margin-left: 10px;
  }

  &.active {
    background-color: ${colors.lightGrey};
    border-right: 4px solid ${colors.green};
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;

    p {
      color: ${colors.green};
    }
  }
`;

const StyledDiv = styled.div`
  position: absolute;
  right: 12px;
`;

const StyledCloseBtn = styled.button`
  background-color: transparent;
  color: ${colors.darkGrey};
  border: 0;
`;

const SideBar = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  const [active, setActive] = useState('/');
  const history = useHistory();

  useEffect(() => {
    setActive(history.location.pathname);
  }, [history]);

  const closeSideBarHandler = () => setIsOpen(false);

  return (
    <div className={`sidebar${isOpen ? ' is-open' : ''}`}>
      <div className="sidebar-header">
        <a href="/">
          <img src={images.Logo} alt="aulrts" style={{ height: '38px' }} />
        </a>
        <StyledDiv>
          <StyledCloseBtn className="sidebar-sm" onClick={closeSideBarHandler}>
            X
          </StyledCloseBtn>
        </StyledDiv>
      </div>
      <div className="side-menu ps-4 pe-0">
        <Nav vertical className="list-unstyled">
          {sidebarItems.map(({ title, inActiveIcon, activeIcon, link }) => (
            <SideItem
              active={active === link ? true : false}
              onClick={() => {
                history.push(link);
                setActive(link);
              }}
            >
              <img
                src={active === link ? activeIcon : inActiveIcon}
                alt="icon"
              />
              <p>{title}</p>
            </SideItem>
          ))}
        </Nav>
      </div>
    </div>
  );
};

export default SideBar;
