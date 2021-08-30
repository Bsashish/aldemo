
import styled from 'styled-components';

interface IIndicatorProps {
    value: any
}
export default function Indicator(props:IIndicatorProps) {
    const { value } = props
    return (
        <>
            {
                Math.sign(value) === 1 ? <StyledIncreaseChangedDiv>{value}</StyledIncreaseChangedDiv> : <StyledDecreaseChangedDiv>{value}</StyledDecreaseChangedDiv>
            }
        </>
    )
}

const StyledIncreaseChangedDiv = styled.div`
  color: ${({ theme }) => theme.colors.green};

  &::before {
    content: '\\2191\\2002';
    font-size: 20px;
  }
`;

const StyledDecreaseChangedDiv = styled.div`
  color: ${({ theme }) => theme.colors.roseRed};

  &::before {
    content: '\\2193\\2002';
    font-size: 20px;
  }
`;