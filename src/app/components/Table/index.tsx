import PropTypes from 'prop-types';
import { Table } from 'reactstrap';
import styled from 'styled-components';

const StyledTable = styled(Table).attrs(() => ({ responsive: true }))`
  min-width: 550px;

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

const StyledDiv = styled.div`
  border: 0;
  border-radius: 8px;
  background-color: white;
  padding: 12px 32px;
  margin: 24px auto;
  width: 100%;
`;

const CustomTable = ({ columns, data }) => {
  return (
    <StyledDiv>
      <StyledTable>
        <thead>
          <tr>
            {columns.map(column => (
              <th key={column.field} style={column.style || {}}>
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* TODO: Update the key from index to something like id */}
          {data.map((item, index) => (
            <tr key={index}>
              {/* TODO: Update the key from index to something like id */}
              {columns.map((column, index) => (
                <td key={index}>{item[column.field]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </StyledDiv>
  );
};

CustomTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CustomTable;
