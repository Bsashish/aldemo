import styled from 'styled-components';
import images from 'utils/images';

const StyledIcon = styled.img`
  height: 20px;
  vertical-align: top;
  margin-left: 15px;
  display: flex;
  align-items: center;
`;

export const IconInfo = () => {
  return <StyledIcon src={images.Info} alt="info" />;
};

export const IconLogo = () => {
  return <StyledIcon src={images.LogoSmall} alt="small logo" />;
};
