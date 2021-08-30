import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';
import { Title, Tabs, IconButton } from 'app/components/common';
import CustomTable from 'app/components/Table';
import images from 'utils/images';
import colors from 'utils/colors';
import { LinkButton } from '../TopTen';
import { RowsDropdown } from 'app/components/common/RowsDropDown';

export const Halts = (): JSX.Element => {
  return (
    <div className="mx-4">
      <Title title="Halts" />
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
              <RowsDropdown items={[20, 50, 100]} />
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

const StyledChangedDiv = styled.div<{ type: string }>`
  color: ${({ theme, type }) =>
    theme.colors[type === 'up' ? 'green' : 'roseRed']};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

const tabs = [
  {
    id: 0,
    name: 'Intraday',
    type: 'In',
  },
];

const colums = [
  {
    title: '#',
    field: 'id',
  },
  {
    title: 'Symbol',
    field: 'symbol',
  },
  {
    title: '',
    renderCell: () => {
      return <LinkButton>Open</LinkButton>;
    },
    columnProps: {
      style: {
        maxWidth: 40,
      },
    },
  },
  {
    title: 'Price',
    field: 'price',
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
  {
    title: (
      <div className="d-flex justify-content-center">
        <StyledTitle>diection</StyledTitle>&nbsp;
        <StyledTooltip
          src={images.Tooltip}
          data-for="tooltip"
          data-tip="diection"
        />
      </div>
    ),
    field: 'diection',
  },
];

const renderContainerByValue = (type: string): JSX.Element => {
  return (
    <StyledChangedDiv type={type}>
      {type === 'up' ? <>&#9650;</> : <>&#9660;</>}
    </StyledChangedDiv>
  );
};

const data = [
  [
    {
      id: '01',
      symbol: 'silk',
      price: <StyledPrice>$45.12</StyledPrice>,
      volume: '201,355,24',
      timestamp: '05:30:21',
      diection: renderContainerByValue('up'),
      rowProps: {
        className: 'table-row',
      },
    },
    {
      id: '02',
      symbol: 'wQWE',
      price: <StyledPrice>$4.51</StyledPrice>,
      volume: '201,355,24',
      timestamp: '12:30:21',
      diection: renderContainerByValue('down'),
      rowProps: {
        className: 'table-row',
      },
    },
    {
      id: '03',
      symbol: 'wQWE',
      price: <StyledPrice>$4.12</StyledPrice>,
      volume: '201,355,24',
      timestamp: '05:30:21',
      diection: renderContainerByValue('up'),
      rowProps: {
        className: 'table-row',
      },
    },
  ],
];
