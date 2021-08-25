import { useState } from 'react';
import { Toggle } from 'app/components/common';
import CustomTable from 'app/components/Table';
import styled from 'styled-components';
import { Title } from 'app/components/common';

const StyledDiv = styled.div`
  padding: 0 1.5rem;
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
    style: {
      width: '220px',
    },
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
  const [current, setCurrent] = useState('Pre Market');

  return (
    <>
      <StyledDiv>
        <Title title="Top Ten" />
        <Toggle
          items={['Top Ten Gains', 'Top Ten Shorts', 'Top Ten Swings']}
          current={current}
          setCurrent={setCurrent}
        />
        <CustomTable columns={colums} data={data} />
      </StyledDiv>
    </>
  );
};
