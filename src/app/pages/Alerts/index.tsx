import { useState } from 'react';
import styled from 'styled-components';
import { Toggle } from 'app/components/common/Toggle';
import { Title } from '../../components/common/Title';
import CustomTable from 'app/components/Table';

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

export const Alerts = () => {
  const [current, setCurrent] = useState('Pre Market');

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

  return (
    <div className="mx-4">
      <Title title="Alerts" />
      <Toggle
        items={['Pre Market', 'Intraday', 'Post Market']}
        current={current}
        setCurrent={setCurrent}
      />
      <CustomTable columns={colums} data={data} />
    </div>
  );
};
