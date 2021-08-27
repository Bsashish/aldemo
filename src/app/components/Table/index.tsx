import { ReactElement } from 'react';
import { Table } from 'reactstrap';
import styled from 'styled-components';
import { NoData } from '../NoDataComponent';

const StyledTable = styled(Table).attrs({
  responsive: true,
  hover: true,
})`
  min-width: 650px;

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
  border-radius: 8px;
  background-color: white;
  padding: 12px 32px;
  margin: 24px auto;
  width: 100%;
`;
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
          <tr>
            {columns.map(column => (
              <th key={column.field} {...(column.columnProps ?? {})}>
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* TODO: Update the key from index to something like id */}
          {data.map((item, index) => (
            <tr key={index} {...(item.rowProps || {})}>
              {/* TODO: Update the key from index to something like id */}
              {columns.map((column, index) => (
                <td key={index}>
                  {column.field
                    ? item[column.field]
                    : column.renderCell && column.renderCell(item)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </StyledDiv>
  );
};

export default CustomTable;
