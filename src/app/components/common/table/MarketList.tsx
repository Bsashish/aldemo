
// Core import
import { useState, useEffect } from 'react';

// Style import
import { Card, CardBody, Table } from 'reactstrap';
import styled from 'styled-components';

// Common Component
import Indicator from 'utils/Indicator';

export interface IMarketListProps {
    type: string
}
export interface IMarketInfo {
    id: number,
    symbol: any,
    last_price: number,
    change: number
    amount: number
}

const mockData: any = [
    {
        id: 1,
        symbol: 'INR',
        last_price: 3200,
        change: 89,
        amount: 3900
    },
    {
        id: 2,
        symbol: 'INR',
        last_price: 3200,
        change: -34,
        amount: 1200
    }
]
export default function MarketList(props: IMarketListProps) {
    const [marketData, setMarketData] = useState([])
    useEffect(() => {
        // Call the API based on the type ( GAINS etc)
        setMarketData(mockData)
    }, [props.type])
    const { type } = props
    return (
        <>
            <MarketListWrapper>
                <MarketListContainer>
                    <MarketListTable>
                        <TableHeadWrapper>
                            <TableRow>

                                <TableHead>
                                    {'#'}
                                </TableHead>

                                <TableHead>
                                    {'SYMBOL'}
                                </TableHead>

                                <TableHead>
                                    {'LAST PRICE'}
                                </TableHead>

                                <TableHead>
                                    {'CHANGE'}
                                </TableHead>

                                <TableHead>
                                    {'AMOUNT'}
                                </TableHead>

                            </TableRow>
                        </TableHeadWrapper>
                        <TableBody>
                            {
                                getMarketTableContent(marketData)
                            }
                        </TableBody>
                    </MarketListTable>
                </MarketListContainer>
            </MarketListWrapper>
        </>
    )
}

const getMarketTableContent = (
    list: IMarketInfo[],
) => {
    return list.map((market: IMarketInfo, i: number): any => {
        return <MarketRow
            key={i}
            info={market}
        />
    })
}

const MarketRow: any = (
    { info }
) => {
    const { id,
        symbol,
        last_price,
        change,
        amount } = info
    return (
        <>
            <TableRow>
                <TableData>{id}</TableData>
                <TableData>{symbol}</TableData>
                <TableData>{last_price}</TableData>
                <TableData><Indicator value={change} /></TableData>
                <TableData>{amount}</TableData>
            </TableRow>
        </>
    )

}
const MarketListTable = styled(Table)`
  td,
  th {
    padding: 16px;
    border-color: ${({ theme }) => theme.colors.midGrey} !important;
    letter-spacing: 1.2px;
  }

  th {
    color: ${({ theme }) => theme.colors.darkGrey};
    text-transform: uppercase;
    font-size: 15px;
  }

  td {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.darkBlue};
  }
`;

const TableHeadWrapper = styled.thead`

`
const TableRow = styled.tr`
`
const TableHead = styled.th`
padding: 16px;
border-color: ${({ theme }) => theme.colors.midGrey} !important;
letter-spacing: 1.2px;
`

const TableBody = styled.tbody`
`
const TableData = styled.td`
font-weight: bold;
    color: ${({ theme }) => theme.colors.darkBlue};
`
const MarketListWrapper = styled(Card)`
  border: 0;
  border-radius: 8px;
  margin: 24px auto;
`;

const MarketListContainer = styled(CardBody)`
  padding: 12px 32px;
`;