// import { toBeChecked } from "@testing-library/jest-dom/dist/matchers";
import { useState } from "react";
import axios from "axios";
import "../css/country.css";

export const AddCounty = () => {
  const [country, setCountry] = useState({ country: "" });
  const [countryData, setCountryData] = useState([]);
  function check() {
    axios.post("http://localhost:3004/countries", country);
  }
  return (
    <>
      <form
        action=""
        id="country_form"
        onSubmit={(e) => {
          e.preventDefault();
          check();
        }}
      >
        <input
          type="text"
          placeholder="Country Name"
          onChange={(e) => {
            setCountry({ country: e.target.value });
          }}
        />
        <input type="submit" />
      </form>
    </>
  );
};
