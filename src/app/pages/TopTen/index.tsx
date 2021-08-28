import { useState } from 'react';
import { Badge } from 'reactstrap';
import styled from 'styled-components';
import CustomTable from 'app/components/Table';
import { Title, Tabs, IconButton } from 'app/components/common';
import CustomPopover from 'app/components/Popover';
import images from 'utils/images';

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
  border: 1px solid ${({ theme }) => theme.colors.darkBlue};
  border-radius: 24px;
  padding: 8px 18px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.darkBlue};
  letter-spacing: 1.1px;
  font-weight: 600;
  margin-right: 8px;
  position: relative;
  transition: 0.3s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.green};
  }
`;

const StyledBadge = styled(Badge)`
  width: 18px;
  aspect-ratio: 1 / 1;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  border-radius: 50%;
  text-align: center;
  font-size: x-small;
  font-weight: 100;
  padding: 0;
  padding-top: 4px;
  position: absolute;
  top: -8px;
  right: 8px;
`;

const StyledChangedDiv = styled.div`
  color: ${({ theme }) => theme.colors.green};
  display: flex;
  align-items: center;
`;

const StyledChangedImg = styled.img`
  height: 10px;
  width: 10px;
  margin-right: 6px;
`;

const StyledSearchInput = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.midGrey};
  border-radius: 8px;
  padding: 6px;
  width: 100%;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.green};
  }
`;

const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 1px solid ${({ theme }) => theme.colors.midGrey};
  border-radius: 8px;
  padding: 6px;

  &:checked {
    background-color: ${({ theme }) => theme.colors.green};
  }
`;

const StyledCheckboxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`;

const StyledHeader = styled.h5`
  color: ${({ theme }) => theme.colors.darkBlue};
  margin: 0;
  min-width: 120px;
`;

const LinkButton = styled.button`
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.darkGrey};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.darkGrey};
  padding: 2px 6px;
  font-size: small;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.green};
  }
`;

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

const renderIncreseDescreseComponent = (
  type: number,
  value: string,
): JSX.Element => {
  // 0 for plus and 1 for minus
  if (type === 0) {
    return (
      <StyledChangedDiv>
        <StyledChangedImg src={images.Up_Arrow} alt="up" />
        {value}
      </StyledChangedDiv>
    );
  } else {
    return (
      <StyledChangedDiv>
        <StyledChangedImg src={images.Down_Arrow} alt="up" />
        {value}
      </StyledChangedDiv>
    );
  }
};

const data = [
  [
    {
      id: '01',
      symbol: 'silk',
      lastPrice: '$45.12',
      change: renderIncreseDescreseComponent(0, '+45.12'),
      amount: '45.12M',
      rowProps: {
        className: 'table-row',
      },
    },
    {
      id: '02',
      symbol: 'wQWE',
      lastPrice: '$4.12',
      change: renderIncreseDescreseComponent(1, '-12.04'),
      amount: '51.12M',
      rowProps: {
        className: 'table-row',
      },
    },
  ],
  [
    {
      id: '03',
      symbol: 'wQWE',
      lastPrice: '$4.12',
      change: renderIncreseDescreseComponent(1, '-12.4'),
      amount: '51.12M',
      rowProps: {
        className: 'table-row',
      },
    },
    {
      id: '04',
      symbol: 'wQWE',
      lastPrice: '$4.12',
      change: renderIncreseDescreseComponent(0, '+45.12'),
      amount: '51.12M',
      rowProps: {
        className: 'table-row',
      },
    },
  ],
  [],
];

const options = [
  {
    id: '1',
    title: 'Depository Receipt',
    value: 'depositoryReceipt',
    isChecked: false,
  },
  {
    id: '2',
    title: 'American Depository Share',
    value: 'americanDepositoryShare',
    isChecked: false,
  },
  {
    id: '3',
    title: 'Index',
    value: 'index',
    isChecked: false,
  },
  {
    id: '4',
    title: 'Common Stock',
    value: 'commonStock',
    isChecked: false,
  },
  {
    id: '5',
    title: '144A',
    value: '144a',
    isChecked: false,
  },
];

const tabs = [
  {
    id: 0,
    name: 'Top Ten Gains',
    // type: 'Pre',
  },
  {
    id: 1,
    name: 'Top Ten Shorts',
    // type: 'In',
  },
  {
    id: 2,
    name: 'Top Ten Swings',
    // type: 'Post',
  },
];

export const TopTen = () => {
  const [issueClassOptions, setIssueClassOptions] = useState(options);
  const [isIssueClassOpen, setIsIssueClassOpen] = useState(false);

  const changeValueHandler = ({ target: { value: searchedValue } }) => {
    if (!searchedValue) {
      setIssueClassOptions(options);
      return;
    }

    setIssueClassOptions(prev =>
      prev.filter(({ title }) =>
        title.toLowerCase().includes(searchedValue.toLowerCase()),
      ),
    );
  };

  const selectionChangeHandler = (e, option) => {
    setIssueClassOptions(prev =>
      prev.map(opt => {
        if (opt.id !== option.id) {
          return opt;
        }

        return {
          ...opt,
          isChecked: e.target.checked,
        };
      }),
    );
  };

  return (
    <StyledDiv>
      <Title title="Top Ten" />
      <Tabs
        tabs={tabs}
        minWidthInContent={'initial'}
        rightSection={() => {
          return (
            <div
              className="d-flex justify-content-start flex-wrap mt-4 mt-lg-0"
              style={{ gap: 16 }}
            >
              <IconButton
                text="Filter"
                icon={<img src={images.Filter} alt="filter" />}
                displayRightIcon={false}
                disabled
              />
              <IconButton
                text="Pre Market"
                icon={<img src={images.Clock} alt="pre" />}
              />
              <IconButton
                text="Today"
                icon={<img src={images.Calender} alt="today" />}
              />
            </div>
          );
        }}
        render={(index: number): JSX.Element => {
          return (
            <>
              <StyledFilterDiv>
                <StyledButton
                  id="PopoverClick"
                  type="button"
                  onClick={() => setIsIssueClassOpen(!isIssueClassOpen)}
                >
                  <StyledBadge>
                    {
                      issueClassOptions.filter(({ isChecked }) => isChecked)
                        .length
                    }
                  </StyledBadge>
                  Issue Class
                </StyledButton>
                <CustomPopover
                  trigger="legacy"
                  placement="bottom"
                  target="PopoverClick"
                  isOpen={isIssueClassOpen}
                  toggle={() => setIsIssueClassOpen(!isIssueClassOpen)}
                >
                  <StyledSearchInput
                    type="search"
                    placeholder="Search"
                    onChange={changeValueHandler}
                  />
                  {issueClassOptions.map(option => (
                    <StyledCheckboxContainer key={option.id}>
                      <StyledHeader>{option.title}</StyledHeader>
                      <StyledCheckbox
                        checked={option.isChecked}
                        onChange={e => selectionChangeHandler(e, option)}
                      />
                    </StyledCheckboxContainer>
                  ))}
                </CustomPopover>
                <StyledButton>Sector</StyledButton>
                <StyledButton>Index</StyledButton>
              </StyledFilterDiv>
              <CustomTable columns={colums} data={data[index]} />
            </>
          );
        }}
      />
    </StyledDiv>
  );
};
