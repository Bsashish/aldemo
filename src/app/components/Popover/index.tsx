import PropTypes from 'prop-types';
import { Popover, PopoverBody } from 'reactstrap';
import styled from 'styled-components';

const StyledPopover = styled(Popover)`
  border: 0;
  border-radius: 8px;
`;

const CustomPopover = ({ children }) => {
  return (
    <StyledPopover>
      <PopoverBody>{children}</PopoverBody>
    </StyledPopover>
  );
};

CustomPopover.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CustomPopover;
