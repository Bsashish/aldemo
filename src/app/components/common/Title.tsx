import styled from 'styled-components';

const StyledTitle = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.darkBlue};
  margin: 60px 0px 30px;
`;

export const Title = ({ title, id = '' }) => {
  return <StyledTitle id={id}>{title}</StyledTitle>;
};
