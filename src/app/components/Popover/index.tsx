import PropTypes from 'prop-types';
import { PopoverBody, UncontrolledPopover } from 'reactstrap';
import styled from 'styled-components';

const StyledPopover = styled(UncontrolledPopover)`
  .popover {
    max-width: initial;
    border: 0;
    border-radius: 8px;
    top: 12px !important;
    left: 12px !important;
  }
`;

const StyledPopoverBody = styled(PopoverBody)`
  min-width: 400px;
`;

const CustomPopover = ({ children, ...props }) => {
  return (
    <StyledPopover {...props}>
      <StyledPopoverBody>{children}</StyledPopoverBody>
    </StyledPopover>
  );
};

CustomPopover.propTypes = {
  children: PropTypes.node.isRequired,
  trigger: PropTypes.string,
  placement: PropTypes.string,
  target: PropTypes.string,
};

export default CustomPopover;
