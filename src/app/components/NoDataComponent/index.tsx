import styled from 'styled-components';

interface INoDataProps {
  title?: string;
  subText?: string;
}

export const NoData = ({
  title = 'Data Not Available',
  subText = 'The market will open from 9:30 AM to 4 PM EST',
}: INoDataProps) => {
  return (
    <StyledDiv>
      <StyledInnerDiv>
        <h4>{title}</h4>
        <p>{subText}</p>
      </StyledInnerDiv>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  border: 0;
  border-radius: 12px;
  background-color: white;
  margin: 24px auto;
  padding: 4em 12em;
  width: 100%;
  min-width: 550px;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledInnerDiv = styled.div`
  border: 1px dashed ${({ theme }) => theme.colors.grey};
  border-radius: 8px;
  margin: 2em auto;
  width: 100%;
  min-width: 500px;
  padding: 6em 4em 9em;
  text-align: center;

  h4 {
    color: ${({ theme }) => theme.colors.darkBlue};
    font-weight: bolder;
    margin-bottom: 1em;
  }

  p {
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`;
