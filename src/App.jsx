import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Dropdown } from 'semantic-ui-react';
import DataTable from './DataTable';

function App() {
  const [allData, setAllData] = useState();
  const [selectedCountries, setSelectedCountries] = useState();
  const [tableData, setTableData] = useState();

  useEffect(() => {
    axios.get(`https://api.worldbank.org/v2/country/all?format=json`)
    .then(res => {
      const countryData = res.data[1].filter(region => region.capitalCity && region.capitalCity.length)
      setAllData(countryData);
    })
  }, []);
  
  useEffect(() => {
    const selectedCountriesData = allData && allData.length &&      allData.filter(country => selectedCountries.includes(country.name)).map(country => ({'country': country.name, 'capital': country.capitalCity, 'incomeLevel': country.incomeLevel.value, 'lendingType': country.lendingType.value, 'region': country.region.value}))
    
    setTableData(selectedCountriesData)
  }, [selectedCountries]);
  
  const countryOptions = allData && allData.length && allData.map(country => ({ 'text': country.name, 'value': country.name}));

  return (
    <div style={{display: "block", width: "70%", margin: "auto", marginTop: "20px"}}>
      {allData && allData.length && 
        <div>
          <Dropdown options={countryOptions} placeholder='Choose a country' onChange={(_, t) => setSelectedCountries(t.value)} basic clearable selection fluid multiple search/>
          <DataTable data={tableData}></DataTable>
        </div>
      }
    </div>
      
  );
}

export default App;
