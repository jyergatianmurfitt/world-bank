import React from 'react';
import { Table} from 'semantic-ui-react';

function DataTable({ data }) {

    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Country</Table.HeaderCell>
            <Table.HeaderCell>Capital</Table.HeaderCell>
            <Table.HeaderCell>Region</Table.HeaderCell>
            <Table.HeaderCell>Income Level</Table.HeaderCell>
            <Table.HeaderCell>Lending Type</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data && data.length && data.map(country => {(
            <Table.Row>
              <Table.Cell>{country.country}</Table.Cell>
              <Table.Cell>{country.capital}</Table.Cell>
              <Table.Cell>{country.region}</Table.Cell>
              <Table.Cell>{country.incomeLevel}</Table.Cell>
              <Table.Cell>{country.lendingType}</Table.Cell>
            </Table.Row>
          )})} 
        </Table.Body>
      </Table>
    );
  }
  
  export default DataTable;
  