import React, { useEffect, useState } from 'react';
import { NavItem, Nav } from 'reactstrap';
import images from 'utils/images';
import styled from 'styled-components';
import colors from 'utils/colors';
import sidebarItems from './SideBarItem';
import { useHistory } from 'react-router-dom';
import CustomPopover from '../Popover';

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

const StyledContainerDiv = styled.div`
  height: 100vh;
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

const StyledHelpNav = styled(Nav)`
  justify-self: flex-end;
  margin-top: auto;
`;

const StyledHelpItem = styled(SideItem)`
  justify-self: flex-end;
  margin-top: auto;
  margin-bottom: 5rem;
`;

const StyledHelpMenuItem = styled(SideItem)`
  p {
    color: ${colors.darkBlue};
    font-weight: 600;
  }

  &:hover {
    background-color: ${colors.darkGrey}15;
    border-radius: 8px;
  }
`;

const StyledBanner = styled.div`
  background-image: url(${images.Ads});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  //height: 100%;
  min-height: 320px;
  width: 100%;
  margin: auto;
  margin-right: 12px;
  margin-left: -12px;
  position: relative;
  text-align: left;

  div {
    position: absolute;
    top: 75%;
    left: 0;
    transform: translate(0, -100%);
    padding: 12px;

    p {
      font-size: 12px;
      color: ${colors.white}95;

      span {
        font-size: 14px;
        color: ${colors.white};
        font-weight: 600;
      }
    }

    button {
      background-color: rgba(255, 255, 255, 0.32);
      color: ${colors.white};
      border: 0;
      padding: 12px;
      border-radius: 12px;
    }

    @media (max-width: 768px) {
      transform: translate(180%, -80%);
    }

    @media (max-width: 425px) {
      transform: translate(60%, -80%);
    }

    @media (max-width: 375px) {
      transform: translate(40%, -80%);
    }
  }

  @media (max-width: 425px) {
    margin: 3rem 0;
  }
`;

const SideBar = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  const [active, setActive] = useState('/');
  const [helpMenu, sethelpMenu] = useState(false);
  const history = useHistory();

  useEffect(() => {
    setActive(history.location.pathname);
  }, [history]);

  const closeSideBarHandler = () => setIsOpen(false);

  return (
    <StyledContainerDiv className={`sidebar${isOpen ? ' is-open' : ''}`}>
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
              key={link}
              active={active === link ? true : false}
              onClick={() => {
                history.push(link);
                setActive(link);
                closeSideBarHandler();
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
        <StyledBanner>
          <div>
            <p>
              Subscribe For Full <br /> Access To <br />{' '}
              <span>Premium Features</span>
            </p>
            <button>Learn More</button>
          </div>
        </StyledBanner>
        <StyledHelpNav vertical className="list-unstyled">
          <StyledHelpItem id="helpClick" onClick={() => sethelpMenu(!helpMenu)}>
            <img src={images.Help} alt="icon" />
            <p>Need Help</p>
          </StyledHelpItem>
          <CustomPopover
            placement="right"
            target="helpClick"
            top="-120px"
            left="50px"
            minWidth="250px"
            isOpen={helpMenu}
            toggle={() => sethelpMenu(!helpMenu)}
            className="shadow"
            zIndex={99999}
          >
            <StyledCloseBtn
              className="float-end"
              onClick={() => sethelpMenu(!helpMenu)}
            >
              x
            </StyledCloseBtn>
            <StyledHelpMenuItem>
              <img src={images.Support} alt="icon" />
              <p>Support Center</p>
            </StyledHelpMenuItem>
            <StyledHelpMenuItem>
              <img src={images.Suggestion} alt="icon" />
              <p>Have Suggestion</p>
            </StyledHelpMenuItem>
          </CustomPopover>
        </StyledHelpNav>
      </div>
    </StyledContainerDiv>
  );
};

export default SideBar;
