import React, { useState } from 'react';


function SearchForm({ onSearch, selectedTab }) {
  const [departureCity, setDepartureCity] = useState('');
  const [arrivalCity, setArrivalCity] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [priceRange, setPriceRange] = useState([0, 10000]);

  const handleSearch = () => {
    const searchData = {
      departureCity,
      arrivalCity,
      departureDate,
      returnDate: selectedTab === 'return' ? returnDate : '',
      priceRange,

    };
    onSearch(searchData);
  };

  return (
    <div>
    
    <div style={{flexDirection:'row',display:'flex',justifyContent:'space-evenly',marginRight:750}}>
      <label>
        Departure City:
        <select
          value={departureCity}
          onChange={(e) => setDepartureCity(e.target.value)}
        >
          <option value="">Select Departure City</option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
          <option value="jaipur">Jaipur</option>
          <option value="bangalore">Bangalore</option>
          <option value="pune">Pune</option>
          
        </select>
       
      </label>
      <label>
        Arrival City:
        <select
          value={arrivalCity}
          onChange={(e) => setArrivalCity(e.target.value)}
        >
          <option value="">Select Arrival City</option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
          <option value="jaipur">Jaipur</option>
          <option value="bangalore">Bangalore</option>
          <option value="pune">Pune</option>
          
        </select>
        
      </label>
      </div>
      <div style={{flexDirection:'column',display:'flex',marginLeft:20,justifyContent:'space-evenly'}}>
      <label>
          Departure Date:
          <input
          
            type="date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
          />
        </label>
       
      {selectedTab === 'return' && (
        <label>
          Return Date:
          <input
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
          />
        </label>
      )}
      </div>
      <div style={{marginLeft:20,flexDirection:'row',display:'flex',}}>
      <label>
        Price Range:
        <input
       
          type="range"
          min="0"
          max="10000"
          step="10"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([priceRange[0], e.target.value])}
        />
        Rs.{priceRange[0]} - Rs.{priceRange[1]}
      </label>
     
      </div>
      
      <div style={{marginLeft:10}}>
      <button onClick={handleSearch}>Search</button>
      </div>
      
    
    </div>
  );
}

export default SearchForm;
