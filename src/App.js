
import React, { useState } from 'react';
import './style.css';
import flights from './flightData';
import SearchForm from './components/searchForm';
import FlightList from './components/flightList';


function App() {
  const [selectedTab, setSelectedTab] = useState('oneWay');
  const [searchResults, setSearchResults] = useState([]);
  const [ticketSearch,setTicketSearch] = useState(false)
 

  const handleSearch = (searchData) => {
    setTicketSearch(true)
    const { departureCity,departureDate, arrivalCity, returnDate, priceRange } = searchData;
    
    // Filter flights based on user input
    const filteredFlights = flights.filter((flight) => {
      
      return (
        flight.departureCity === departureCity &&
        flight.arrivalCity === arrivalCity &&
        ((selectedTab === 'oneWay' && flight.departureDate === departureDate ) || (selectedTab === 'return' && flight.returnDate === returnDate)) &&
       
        flight.price >= priceRange[0] &&
        flight.price <= priceRange[1]
      );
    });

    setSearchResults(filteredFlights);

   
  };

  return (
    <div>
      <h1>Flight Search App</h1>
      <div className="tabs">
        <button onClick={() => setSelectedTab('oneWay')}>One Way</button>
        <button onClick={() => setSelectedTab('return')}>Return</button>
      </div>
      <SearchForm onSearch={handleSearch} selectedTab={selectedTab} />
      <FlightList flights={searchResults} selectedTab={selectedTab} departureDate={handleSearch} ticketSearch={ticketSearch}  />
    </div>
  );
}

export default App;

