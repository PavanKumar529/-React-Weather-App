import React, { useState } from 'react';
import { IoSearch } from "react-icons/io5";
import './App.css';

const Searchcity = ({ onSearch }) => {
  const [city, setCity] = useState('');
  const [error, setError] = useState(null);

  const handleSearch = () => {
    if (city.trim() !== '') {
      setError(null); // Reset error state if city is provided     
      onSearch(city.trim());
    } else {
      setError('Please enter a city name.');
    }
  }

  return (
    <>
      <h1 id="hed">Weather App</h1>
      <div className='search-container'>
        <table>
          <tbody>
            <tr>
              <td><input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder='Enter Your City' className='search-box' /></td>
              <td><button id='search-btn' onClick={handleSearch}><IoSearch /></button></td>
            </tr>
          </tbody>
        </table>
      </div>
      {error && <p className="error">{error}</p>}
    </>
  )
}

export default Searchcity;
