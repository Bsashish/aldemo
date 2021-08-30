import { ReactElement } from 'react';
import { Table } from 'reactstrap';
import styled from 'styled-components';
import { NoData } from '../NoDataComponent';

const StyledTable = styled(Table).attrs({
  responsive: true,
  hover: true,
})`
  min-width: 650px;

  tr:last-child {
    td {
      border-bottom-width: 0px;
    }
  }

  td,
  th {
    padding: 1em;
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

const StyledDiv = styled.div`
  border: 0;
  border-radius: 12px;
  background-color: white;
  padding: 12px 32px;
  margin: 24px auto;
  width: 100%;
`;

const TableRow = styled.tr``;
const TableData = styled.td``;
const TableHead = styled.th``;

interface Row {
  rowProps?: object;
  [key: string]: any;
}

interface Column {
  title: string | any;
  field?: string;
  columnProps?: object;
  renderCell?: (row: Row) => ReactElement;
}

interface ITableProps {
  columns: Column[];
  data: Row[];
}

const CustomTable = ({ columns, data }: ITableProps) => {
  if (data.length === 0) {
    return <NoData />;
  }

  return (
    <StyledDiv>
      <StyledTable>
        <thead>
          <TableRow>
            {columns.map(column => (
              <TableHead key={column.field} {...(column.columnProps ?? {})}>
                {column.title}
              </TableHead>
            ))}
          </TableRow>
        </thead>
        <tbody>{getTableContent(data, columns)}</tbody>
      </StyledTable>
    </StyledDiv>
  );
};

const getTableContent = (data, columns) => {
  return data?.map((info, idx: number): any => {
    return <TableContent key={idx} info={info} columns={columns} />;
  });
};

const TableContent: any = ({ info, columns }) => {
  return (
    <>
      <TableRow {...(info.rowProps ?? {})}>
        {columns?.map((column, idx: number) => (
          <TableData key={idx}>
            {column.field
              ? info[column.field]
              : column.renderCell && column.renderCell(info)}
          </TableData>
        ))}
      </TableRow>
    </>
  );
};

export default CustomTable;
