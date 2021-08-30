import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';
import { Tabs } from 'app/components/common/Tabs';
import { Title } from '../../components/common/Title';
import { IconButton, IconInfo } from 'app/components/common';
import CustomTable from 'app/components/Table';
import images from 'utils/images';
import colors from 'utils/colors';

export const Alerts = (): JSX.Element => {
  return (
    <div className="mx-4">
      <Title title="Alerts" />
      <Tabs
        tabs={tabs}
        minWidthInContent={'initial'}
        render={(index: number): JSX.Element => {
          return <CustomTable columns={colums} data={data[index]} />;
        }}
        rightSection={() => {
          return (
            <div
              className="d-flex justify-content-start flex-wrap mt-4 mt-lg-0"
              style={{ gap: 16 }}
            >
              <IconButton
                text="Today"
                icon={<img src={images.Calender} alt="today" />}
              />
            </div>
          );
        }}
      />
      <ReactTooltip
        id="tooltip"
        place="bottom"
        effect="solid"
        backgroundColor={colors.darkGrey}
      />
    </div>
  );
};

export const StyledTooltip = styled.img`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
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

const tabs = [
  {
    id: 0,
    name: 'Pre Market',
    type: 'Pre',
  },
  {
    id: 1,
    name: 'Intraday',
    type: 'In',
  },
  {
    id: 2,
    name: 'Post Market',
    type: 'Post',
  },
];

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
    title: (
      <div className="d-flex">
        <StyledTitle>movement</StyledTitle>&nbsp;
        <StyledTooltip
          src={images.Tooltip}
          data-for="tooltip"
          data-tip="movement"
        />
      </div>
    ),
    field: 'movement',
  },
  {
    title: (
      <div className="d-flex">
        <StyledTitle>volume</StyledTitle>&nbsp;
        <StyledTooltip
          src={images.Tooltip}
          data-for="tooltip"
          data-tip="volume"
        />
      </div>
    ),
    field: 'volume',
  },
  {
    title: (
      <div className="d-flex">
        <StyledTitle>timestamp</StyledTitle>&nbsp;
        <StyledTooltip
          src={images.Tooltip}
          data-for="tooltip"
          data-tip="timestamp"
        />
      </div>
    ),
    field: 'timestamp',
  },
];

const data = [
  [
    {
      id: '01',
      symbol: 'silk',
      price: <StyledPrice>$45.12</StyledPrice>,
      movement: '813223422',
      volume: '201,355,24',
      timestamp: '05:30:21',
    },
    {
      id: '02',
      symbol: 'wQWE',
      price: <StyledPrice>$4.51</StyledPrice>,
      movement: '813223422',
      volume: '201,355,24',
      timestamp: '12:30:21',
    },
    {
      id: '03',
      symbol: 'wQWE',
      price: <StyledPrice>$4.12</StyledPrice>,
      movement: '813223422',
      volume: '201,355,24',
      timestamp: '05:30:21',
    },
  ],
  [
    {
      id: '04',
      symbol: 'wQWE',
      price: <StyledPrice>$4.12</StyledPrice>,
      movement: '813223422',
      volume: '201,355,24',
      timestamp: '05:30:21',
    },
    {
      id: '05',
      symbol: 'wQWE',
      price: <StyledPrice>$4.12</StyledPrice>,
      movement: '813223422',
      volume: '201,355,24',
      timestamp: '05:30:21',
    },
    {
      id: '06',
      symbol: 'wQWE',
      price: <StyledPrice>$4.12</StyledPrice>,
      movement: '813223422',
      volume: '201,355,24',
      timestamp: '05:30:21',
    },
    {
      id: '07',
      symbol: 'wQWE',
      price: <StyledPrice>$4.12</StyledPrice>,
      movement: '813223422',
      volume: '201,355,24',
      timestamp: '05:30:21',
    },
  ],
  [
    {
      id: '08',
      symbol: 'wQWE',
      price: <StyledPrice>$4.12</StyledPrice>,
      movement: '813223422',
      volume: '201,355,24',
      timestamp: '05:30:21',
    },
    {
      id: '09',
      symbol: 'wQWE',
      price: <StyledPrice>$4.12</StyledPrice>,
      movement: '813223422',
      volume: '201,355,24',
      timestamp: '05:30:21',
    },
    {
      id: 10,
      symbol: 'wQWE',
      price: <StyledPrice>$4.12</StyledPrice>,
      movement: '813223422',
      volume: '201,355,24',
      timestamp: '05:30:21',
    },
  ],
];
