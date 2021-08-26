import { useState } from 'react';
import styled from 'styled-components';
import CustomTable from 'app/components/Table';
import { Title, Toggle } from 'app/components/common';

const StyledDiv = styled.div`
  padding: 0 1.5rem;
`;

const StyledFilterDiv = styled.div`
  border: ${({ theme }) => `solid ${theme.colors.midGrey}`};
  border-width: 1px 0;
  padding: 18px 0;
  margin: 24px 0;
`;

const StyledButton = styled.button`
  border: 1px solid white;
  border-radius: 24px;
  padding: 8px 18px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.darkBlue};
  letter-spacing: 1.1px;
  font-weight: 600;
  transition: 0.3s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.green};
  }
`;

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

const colums = [
  {
    title: '#',
    field: 'id',
    // style: {
    //   width: '220px',
    // },
  },
  {
    title: 'Symbol',
    field: 'symbol',
  },
  {
    title: 'Last Price',
    field: 'lastPrice',
  },
  {
    title: 'Change',
    field: 'change',
  },
  {
    title: 'Amount',
    field: 'amount',
  },
];

const data = [
  {
    id: 1,
    symbol: 'silk',
    lastPrice: '$45.12',
    change: <StyledIncreaseChangedDiv>+45.12</StyledIncreaseChangedDiv>,
    amount: '45.12M',
  },
  {
    id: 2,
    symbol: 'wQWE',
    lastPrice: '$4.12',
    change: <StyledDecreaseChangedDiv>-12.4</StyledDecreaseChangedDiv>,
    amount: '51.12M',
  },
  {
    id: 3,
    symbol: 'wQWE',
    lastPrice: '$4.12',
    change: <StyledDecreaseChangedDiv>-12.4</StyledDecreaseChangedDiv>,
    amount: '51.12M',
  },
  {
    id: 4,
    symbol: 'wQWE',
    lastPrice: '$4.12',
    change: <StyledIncreaseChangedDiv>+45.12</StyledIncreaseChangedDiv>,
    amount: '51.12M',
  },
  {
    id: 5,
    symbol: 'wQWE',
    lastPrice: '$4.12',
    change: <StyledIncreaseChangedDiv>+45.12</StyledIncreaseChangedDiv>,
    amount: '51.12M',
  },
  {
    id: 6,
    symbol: 'wQWE',
    lastPrice: '$4.12',
    change: <StyledDecreaseChangedDiv>-12.4</StyledDecreaseChangedDiv>,
    amount: '51.12M',
  },
  {
    id: 7,
    symbol: 'wQWE',
    lastPrice: '$4.12',
    change: <StyledIncreaseChangedDiv>+45.12</StyledIncreaseChangedDiv>,
    amount: '51.12M',
  },
  {
    id: 8,
    symbol: 'wQWE',
    lastPrice: '$4.12',
    change: <StyledDecreaseChangedDiv>-12.4</StyledDecreaseChangedDiv>,
    amount: '51.12M',
  },
  {
    id: 9,
    symbol: 'wQWE',
    lastPrice: '$4.12',
    change: <StyledDecreaseChangedDiv>-12.4</StyledDecreaseChangedDiv>,
    amount: '51.12M',
  },
  {
    id: 10,
    symbol: 'wQWE',
    lastPrice: '$4.12',
    change: <StyledDecreaseChangedDiv>-12.4</StyledDecreaseChangedDiv>,
    amount: '51.12M',
  },
];

export const TopTen = () => {
  const [current, setCurrent] = useState('Top Ten Gains');

  return (
    <StyledDiv>
      <Title title="Top Ten" />
      <Toggle
        items={['Top Ten Gains', 'Top Ten Shorts', 'Top Ten Swings']}
        current={current}
        setCurrent={setCurrent}
      />
      <StyledFilterDiv>
        <StyledButton>Issue Class</StyledButton>
      </StyledFilterDiv>
      <CustomTable columns={colums} data={data} />
    </StyledDiv>
  );
};
