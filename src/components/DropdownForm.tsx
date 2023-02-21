import { useState } from "react";

const DropdownForm = ({ locationData, onFormSubmit }: any) => {
  const [countryLatLongSelected, setCountryLatLongSelected] = useState("");

  let locationNodes = null;
  if (locationData != undefined) {
    locationNodes = locationData.map((country: any, index: number) => {
      return (
        <option value={country.name.common} key={index}>
          {country.flag} {country.name.common}
        </option>
      );
    });
  }

  const selectChanged = (event: any) => {
    setCountryLatLongSelected(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    onFormSubmit(countryLatLongSelected);
  };

  return (
    <form className="form-wrapper" onSubmit={handleSubmit}>
      <select onChange={selectChanged}>{locationNodes}</select>
      <button>Get weather</button>
    </form>
  );
};

export default DropdownForm;
