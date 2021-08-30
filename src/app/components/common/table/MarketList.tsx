

// Style import
import { Card, CardBody, Table } from 'reactstrap';
import styled from 'styled-components';

// Common Component
import Indicator from 'utils/Indicator';

export interface IMarketListProps {
    type: string
    marketData: any
}
export interface IMarketInfo {
    price: string,
    symbol: any,
    last_price: number,
    change: string
    amount: string,
    volume: string
}

export default function MarketList(props: IMarketListProps) {
    const { type, marketData } = props
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
                                    {'CLASS'}
                                </TableHead>

                                <TableHead>
                                    {'VOLUME'}
                                </TableHead>

                                <TableHead>
                                    {'PRICE'}
                                </TableHead>

                                <TableHead>
                                    {'CHANGE'}
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
            index={i}
        />
    })
}

const MarketRow: any = (
    { info, index }
) => {
    const {
        symbol,
        price,
        volume,
        movement,
        issue_class, } = info
    return (
        <>
            <TableRow>
                <TableData>{index + 1}</TableData>
                <TableData>{symbol}</TableData>
                <TableData>{issue_class}</TableData>
                <TableData>{volume}</TableData>
                <TableData>{Number(price).toFixed(2)}</TableData>
                <TableData><Indicator value={Number(movement).toFixed(2)} /></TableData>
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