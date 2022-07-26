import React, { useState} from 'react';
import { Table } from 'semantic-ui-react';
import tableSort from './utils/tableSort';

function DataTable({ countryData }) {
  const [sortColumn, setSortColumn] = useState();
  const [sortDirection, setSortDirection] = useState('ascending');

  const getTableSort = column => (sortColumn === column ? sortDirection : null);
  const setTableSort = column => {
    setSortColumn(column);
    setSortDirection(sortDirection === 'ascending' ? 'descending' : 'ascending')
  };

  const tableData = countryData && countryData.sort(tableSort(sortColumn, sortDirection));

  
    return (
      <Table celled sortable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
            sorted={getTableSort('country')} onClick={() => setTableSort('country')}
            >
              Country
            </Table.HeaderCell>
            <Table.HeaderCell
            sorted={getTableSort('capital')} onClick={() => setTableSort('capital')}
            >
              Capital
            </Table.HeaderCell>
            <Table.HeaderCell
            sorted={getTableSort('region')} onClick={() => setTableSort('region')}
            >
              Region
            </Table.HeaderCell>
            <Table.HeaderCell
            sorted={getTableSort('incomeLevel')} onClick={() => setTableSort('incomeLevel')}
            >
              Income Level
            </Table.HeaderCell>
            <Table.HeaderCell
            sorted={getTableSort('lendingType')} onClick={() => setTableSort('lendingType')}
            >
              Lending Type
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {tableData && tableData.length ? tableData.map(({ country, capital, region, incomeLevel, lendingType }) => 
            <Table.Row key={country}>
              <Table.Cell>{country}</Table.Cell>
              <Table.Cell>{capital}</Table.Cell>
              <Table.Cell>{region}</Table.Cell>
              <Table.Cell>{incomeLevel}</Table.Cell>
              <Table.Cell>{lendingType}</Table.Cell>
            </Table.Row>
          ) : null}
        </Table.Body>
      </Table>
    );
  }
  
  export default DataTable;
  