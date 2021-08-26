import { useState } from 'react';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';
import { Toggle } from 'app/components/common/Toggle';
import { Title } from '../../components/common/Title';
import CustomTable from 'app/components/Table';

export const StyledTooltip = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.darkGrey};
  font-style: italic;
  text-transform: lowercase;
  border-radius: 50%;
`;

const StyledTitle = styled.p`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: 15px;
  text-transform: uppercase;
  margin: 0;
`;

const StyledPrice = styled.div`
  color: ${({ theme }) => theme.colors.green};
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
      title: 'Price',
      field: 'price',
    },
    {
      title: <div className="d-flex"><StyledTitle>movement</StyledTitle>&nbsp;<StyledTooltip data-for="tooltip" data-tip="movement">i</StyledTooltip></div>,
      field: 'movement',
    },
    {
      title: <div className="d-flex"><StyledTitle>volume</StyledTitle>&nbsp;<StyledTooltip data-for="tooltip" data-tip="volume">i</StyledTooltip></div>,
      field: 'volume',
    },
    {
      title: <div className="d-flex"><StyledTitle>timestamp</StyledTitle>&nbsp;<StyledTooltip data-for="tooltip" data-tip="timestamp">i</StyledTooltip></div>,
      field: 'timestamp',
    },
  ];

  const data = [
    {
      id: 1,
      symbol: 'silk',
      price: <StyledPrice>$45.12</StyledPrice>,
      movement: '813223422',
      volume: '201,355,24',
      timestamp: '05:30:21'
    },
    {
      id: 2,
      symbol: 'wQWE',
      price: <StyledPrice>$4.51</StyledPrice>,
      movement: '813223422',
      volume: '201,355,24',
      timestamp: '12:30:21'
    },
    {
      id: 3,
      symbol: 'wQWE',
      price: <StyledPrice>$4.12</StyledPrice>,
      movement: '813223422',
      volume: '201,355,24',
      timestamp: '05:30:21'
    },
    {
      id: 4,
      symbol: 'wQWE',
      price: <StyledPrice>$4.12</StyledPrice>,
      movement: '813223422',
      volume: '201,355,24',
      timestamp: '05:30:21'
    },
    {
      id: 5,
      symbol: 'wQWE',
      price: <StyledPrice>$4.12</StyledPrice>,
      movement: '813223422',
      volume: '201,355,24',
      timestamp: '05:30:21'
    },
    {
      id: 6,
      symbol: 'wQWE',
      price: <StyledPrice>$4.12</StyledPrice>,
      movement: '813223422',
      volume: '201,355,24',
      timestamp: '05:30:21'
    },
    {
      id: 7,
      symbol: 'wQWE',
      price: <StyledPrice>$4.12</StyledPrice>,
      movement: '813223422',
      volume: '201,355,24',
      timestamp: '05:30:21'
    },
    {
      id: 8,
      symbol: 'wQWE',
      price: <StyledPrice>$4.12</StyledPrice>,
      movement: '813223422',
      volume: '201,355,24',
      timestamp: '05:30:21'
    },
    {
      id: 9,
      symbol: 'wQWE',
      price: <StyledPrice>$4.12</StyledPrice>,
      movement: '813223422',
      volume: '201,355,24',
      timestamp: '05:30:21'
    },
    {
      id: 10,
      symbol: 'wQWE',
      price: <StyledPrice>$4.12</StyledPrice>,
      movement: '813223422',
      volume: '201,355,24',
      timestamp: '05:30:21'
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
      <ReactTooltip id="tooltip" place="bottom" />
    </div>
  );
};
