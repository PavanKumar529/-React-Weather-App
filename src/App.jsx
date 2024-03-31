import './App.css'
import Searchcity from './Searchcity'
import Weather from './Weather'
import { useState } from 'react'

function App() {

  const [city, setCity] = useState('')
  const handleSearch = (city) => {
    setCity(city);
  }

  return (
    <>
      <Searchcity onSearch={handleSearch}/>
      <Weather city={city}/>
    </>
  )
}

export default App
