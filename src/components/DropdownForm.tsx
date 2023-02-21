import { useState } from "react";

const DropdownForm = ({ locationData, onFormSubmit }: any) => {

    const [countrySelected, setCountrySelected] = useState("")

  let locationNodes = null;
  if (locationData != undefined) {
    locationNodes = locationData.map((country: any, index: number) => {
      return <option value={country.latlng} key={index}>{country.flag} {country.name.common}</option>;
    });
  }

  const selectChanged = (event:any) => {
    setCountrySelected(event.target.value)
  }

  const handleSubmit = (event:any) => {
    event.preventDefault();
    onFormSubmit(countrySelected)
  }

  return (
    <form className="form-wrapper" onSubmit={handleSubmit}>
      <select onChange={selectChanged}>{locationNodes}</select>
      <button>Get weather</button>
    </form>
  );
};

export default DropdownForm;
