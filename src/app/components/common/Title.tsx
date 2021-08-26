import styled from 'styled-components';

const StyledTitle = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.darkBlue};
  margin: 1.5rem 0;
`;

export const Title = ({ title }) => {
  return <StyledTitle>{title}</StyledTitle>;
};
