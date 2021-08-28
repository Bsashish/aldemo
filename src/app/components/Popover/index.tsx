import PropTypes from 'prop-types';
import { PopoverBody, Popover } from 'reactstrap';
import styled, { css } from 'styled-components';

const StyledPopover = styled(Popover)`
  .popover {
    max-width: initial;
    border: 0;
    border-radius: 8px;
    top: ${({ top }) => (top ? `${top} !important` : '12px !important')};
    left: ${({ left }) => (left ? `${left} !important` : '12px !important')};
    ${({ zIndex }) =>
      zIndex &&
      css`
        z-index: ${zIndex};
      `}
  }
`;

const StyledPopoverBody = styled(PopoverBody)`
  min-width: ${({ minWidth }) => (minWidth ? minWidth : '400px')};
`;

const CustomPopover = ({ children, ...props }) => {
  return (
    <StyledPopover {...props}>
      <StyledPopoverBody {...props}>{children}</StyledPopoverBody>
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
