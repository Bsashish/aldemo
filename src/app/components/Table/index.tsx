import PropTypes from 'prop-types';
import { Card, CardBody, Table } from 'reactstrap';
import styled from 'styled-components';

const StyledTable = styled(Table)`
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

const StyledCard = styled(Card)`
  border: 0;
  border-radius: 8px;
  margin: 24px auto;
`;

const StyledCardBody = styled(CardBody)`
  padding: 12px 32px;
`;

const CustomTable = ({ columns, data }) => {
  return (
    <StyledCard>
      <StyledCardBody>
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
      </StyledCardBody>
    </StyledCard>
  );
};

CustomTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CustomTable;
