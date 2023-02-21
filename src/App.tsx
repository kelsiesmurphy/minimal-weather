import { useEffect, useState } from "react";
import DropdownForm from "./components/DropdownForm";
import { WeatherConversionData, LocationConversionData } from "./interfaces";

function App() {

  const [locationData, setLocationData] = useState<any>();
  const [weatherData, setWeatherData] = useState<WeatherConversionData>();

  const setFavicon = (icon:string) => {
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = `http://openweathermap.org/img/wn/${icon}@2x.png`;
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
      "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=64a8258206a7596fcc8a6c1fb321a3da"
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
      `https://api.openweathermap.org/data/2.5/weather?lat=${countrySelected.split(",")[0]}&lon=${countrySelected.split(",")[1]}&appid=64a8258206a7596fcc8a6c1fb321a3da`
    )
      .then((res) => res.json())
      .then((data) => {
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
          src={`http://openweathermap.org/img/wn/${weatherData?.weather?.[0]?.icon}@2x.png`}
        />
        <h1>Weather in London</h1>
        <h2>We got {weatherData?.weather?.[0]?.main}</h2>
        <DropdownForm locationData={locationData} onFormSubmit={onFormSubmit} />
      </div>
    );
  }

export default App;
