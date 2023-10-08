import React from 'react';
import './flightList.css';

function FlightList({ flights,selectedTab,ticketSearch }) {
  
  return (
    <div>
      
      <h2>Search Results</h2>
      
      
         <ul>
         {
          flights.length > 0 && ticketSearch ?
         flights.map((flight) => (
          <div style={{display:'flex',flexDirection:'row'}}>
          <div>
           <li key={flight.id}>
             <strong>Airline:</strong> {flight.airline}<br />
             
             <strong>Departure City:</strong> {flight.departureCity}<br/>
             <strong>Arrival City:</strong> {flight.arrivalCity}
            
             <br />
             <strong>Price:</strong> Rs.{flight.price}<br />
             <strong>Departure Time:</strong> {flight.Depart}<br />
             <strong>Arrival Time:</strong> {flight.Arrival}<br />
             <strong>Departure Date:</strong> {flight.departureDate}<br />
             {selectedTab === 'return' && (
               <><strong>Return Date:</strong>{flight.returnDate}</>
             )}
               
              
             
           </li>
           </div>
           <div>
           <button style={{marginLeft:0}}>Book</button>
           </div>
           </div>
         ))
         : 
          ticketSearch ? 
          <div>
          No Flight found
         </div>
         :
         <div></div>
        
        
        
        }
        
       </ul> 
       
    </div>
  );
}

export default FlightList;


