import { useEffect, useState } from "react";
import DropdownForm from "./components/DropdownForm";
import { WeatherConversionData, LocationConversionData } from "./interfaces";

function App() {

  const [locationData, setLocationData] = useState<any>();
  const [weatherData, setWeatherData] = useState<WeatherConversionData>();
  const [countrySelected, setCountrySelected] = useState<string>("London");

  const messageArr = [
    "We got",
    "Looks like",
    "Another day of",
    "Looking outside, we can see",
    "Guess what! It's more",
    "Get ready for",
    "Hunners of"
  ]


  // Set favicon to match weather
  const setFavicon = (icon:string) => {
    let link:any = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  }

  useEffect(() => {
    // Get Location Data
    fetch(
      "https://restcountries.com/v3.1/all"
    )
      .then((res) => res.json())
      .then((data) => {
        setLocationData(data as LocationConversionData)
      })
      .catch((err) => {
        console.log(err.message);
      });

    // Get Weather Data
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${import.meta.env.VITE_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setWeatherData(data as WeatherConversionData)
        setFavicon(data?.weather?.[0]?.icon)
      })
      .catch((err) => {
        console.log(err.message);
      });

  }, []);

  const onFormSubmit = (countrySelected:any) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${countrySelected}&appid=${import.meta.env.VITE_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCountrySelected(countrySelected)
        setWeatherData(data as WeatherConversionData)
        setFavicon(data?.weather?.[0]?.icon)
      })
      .catch((err) => {
        console.log(err.message);
      });    
  }

    return (
      <div className="App">
        <img
          src={`https://openweathermap.org/img/wn/${weatherData?.weather?.[0]?.icon}@2x.png`}
          width="100"
          className="weather-icon"
        />
        <h1>Weather in {countrySelected}</h1>
        <h2>{messageArr[Math.floor(Math.random() * messageArr.length)]} {weatherData?.weather?.[0]?.main.toLowerCase()}</h2>
        <DropdownForm locationData={locationData} onFormSubmit={onFormSubmit} />
      </div>
    );
  }

export default App;
