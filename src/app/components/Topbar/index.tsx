import styled, { useTheme } from 'styled-components';
import colors from 'utils/colors';
import { AlertMessage, ProfileDropdown } from '../common';

import ProfileInActive from 'assets/images/ProfileInActive.png';
import ProfileActive from 'assets/images/ProfileActive.png';
import Logout from 'assets/images/Logout.png';

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 65px;
  background: ${colors.offWhite};
  padding: 0 20px;

  p {
    margin: 0;
  }

  @media screen and (max-width: 768px) {
    padding: 0 10px;
  }
`;

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
      <ProfileDropdown items={items} />
    </Header>
  );
};

export default Topbar;

const items = [
  {
    text: 'Profile',
    iconActive: ProfileActive,
    iconInActive: ProfileInActive,
  },
  {
    text: 'Logout',
    iconActive: Logout,
    iconInActive: Logout,
  },
];
