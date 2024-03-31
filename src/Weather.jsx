import React, { useEffect, useState } from 'react';
import './App.css';
import WeatherImg from './assets/weather.jpeg';
import ClearImg from './assets/clear.jpeg';
import RainImg from './assets/rainy.png';
import SunnyImg from './assets/sunny.png';

const Weather = ({ city }) => {
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);
    const [weatherImg, setWeatherImg] = useState(WeatherImg);

    useEffect(() => {
        const apiKey = "dc07a958dfde94804204f74984b71f26";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        const fetchWeatherData = async () => {
            try {
                const response = await fetch(url);
                if (response.ok) {
                    const data = await response.json();
                    setWeatherData(data);
                    updateWeatherImage(data.weather[0].main);
                } else {
                    setError('City not found. Please enter a valid city name.');
                }
            } catch (err) {
                console.log(err);
                setError('An error occurred while fetching weather data.');
            }
        };

        if (city) {
            fetchWeatherData();
        }
    }, [city]);

    const updateWeatherImage = (weatherCondition) => {
        switch (weatherCondition) {
            case 'Clear':
                setWeatherImg(ClearImg);
                break;
            case 'Rain':
                setWeatherImg(RainImg);
                break;
            case 'Sunny':
                setWeatherImg(SunnyImg);
                break;
            default:
                setWeatherImg(weatherImg);
        }
    };

    return (
        <div>
            <div className="weather-data">
                {weatherData ? (
                    <>
                        <img src={weatherImg} alt="WeatherImg" />
                        <h2>{weatherData.name}</h2>
                        <h1>{Math.round(weatherData.main.temp)}°C</h1>
                        <div className="otherdetails">
                            <div className="humidity">
                                <h3>Humidity: </h3>
                                <h3>{weatherData.main.humidity}%</h3>
                            </div>
                            <div className='wind'>
                                <h3>Wind Speed: </h3>
                                <h3>{weatherData.wind.speed} km/hr</h3>
                            </div>
                        </div>
                    </>
                ) : (
                    <p style={{ color: 'red' }}>{error}</p>
                )}
            </div>
        </div>
    );
}

export default Weather;
