// core import
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

//util import
import styled from 'styled-components';
import colors from 'utils/colors';
import { NavItem } from 'reactstrap';
import images from 'utils/images';

const SIDEBAR_LIST = [
  {
    title: 'Top Ten',
    inActiveIcon: images.TopTenInActive,
    activeIcon: images.TopTenActive,
    link: '/',
  },
  {
    title: 'Alerts',
    inActiveIcon: images.AlertsInActive,
    activeIcon: images.AlertsActive,
    link: '/alerts',
  },
  {
    title: 'Halts',
    inActiveIcon: images.HaltsInActive,
    activeIcon: images.HaltsActive,
    link: '/halts',
  },
  {
    title: 'Settings',
    inActiveIcon: images.SettingsInActive,
    activeIcon: images.SettingsActive,
    link: '/settings',
  },
]



export const SideBarMenu = (props: any) => {
  const [active, setActive] = useState('/');
  const history = useHistory();
  return (
    <>
      {
        SIDEBAR_LIST.map(({ title, inActiveIcon, activeIcon, link }, index) => (
          <SideBarList
            active={active === link ? true : false}
            onClick={() => {
              history.push(link);
              setActive(link);
            }}
            key={index}
          >
            <IconWrapper
              src={active === link ? activeIcon : inActiveIcon}
              alt={title}
            />
            <p>{title}</p>
          </SideBarList>
        ))}
    </>
  )
}


const SideBarList = styled(NavItem)`
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

export const IconWrapper = styled.img`
height: 24px;
width: 24px;
margin-left: 10px;
`