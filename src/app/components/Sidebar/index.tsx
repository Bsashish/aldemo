// third party
import { Nav } from 'reactstrap';

// images import
import images from 'utils/images';

// common components
import LogoWrapper from '../common/LogoWrapper'
import { SideBarMenu } from './SideBarMenu';


const SideBar = () => {
  return (
    <div className="sidebar is-open">
      <div className="sidebar-header">
        <a href="/">
          <LogoWrapper src={images.Logo} alt={'aulrts'} />
        </a>
      </div>
      <div className="side-menu ps-4 pe-0">
        <Nav vertical className="list-unstyled">
          <SideBarMenu />
        </Nav>
      </div>
    </div>
  );
};

export default SideBar;



