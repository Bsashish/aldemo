import { useState } from 'react';
import styled from 'styled-components';
import CustomTable from 'app/components/Table';
import { Title, Toggle } from 'app/components/common';
import CustomPopover from 'app/components/Popover';

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

const options = [
  {
    title: 'Depository Receipt',
    value: 'depositoryReceipt',
    isChecked: false,
  },
  {
    title: 'American Depository Share',
    value: 'americanDepositoryShare',
    isChecked: false,
  },
  {
    title: 'Index',
    value: 'index',
    isChecked: false,
  },
  {
    title: 'Common Stock',
    value: 'commonStock',
    isChecked: false,
  },
  {
    title: '144A',
    value: '144a',
    isChecked: false,
  },
];

export const TopTen = () => {
  const [current, setCurrent] = useState('Top Ten Gains');
  // const [valueToSearch, setValueToSearch] = useState('Top Ten Gains');
  const [issueClassOptions, setIssueClassOptions] = useState([...options]);

  const changeValueHandler = ({ target: { value: searchedValue } }) => {
    if (!searchedValue) {
      setIssueClassOptions(options);
    }

    setIssueClassOptions(
      options.filter(({ title }) =>
        title.toLowerCase().includes(searchedValue.toLowerCase()),
      ),
    );
  };

  return (
    <StyledDiv>
      <Title title="Top Ten" />
      <Toggle
        items={['Top Ten Gains', 'Top Ten Shorts', 'Top Ten Swings']}
        current={current}
        setCurrent={setCurrent}
      />
      <StyledFilterDiv>
        <StyledButton id="PopoverClick" type="button">
          Issue Class
        </StyledButton>
        <CustomPopover
          trigger="legacy"
          placement="bottom"
          target="PopoverClick"
        >
          <StyledSearchInput
            type="search"
            placeholder="Search"
            onChange={changeValueHandler}
          />
          {issueClassOptions.map(option => (
            <StyledCheckboxContainer>
              <StyledHeader>{option.title}</StyledHeader>
              <StyledCheckbox checked={option.isChecked} />
            </StyledCheckboxContainer>
          ))}
        </CustomPopover>
        <StyledButton>Sector</StyledButton>
        <StyledButton>Index</StyledButton>
      </StyledFilterDiv>
      <CustomTable columns={colums} data={data} />
    </StyledDiv>
  );
};
