import axios from "axios";
import { useState } from "react";
import "../css/form.css";

export const FormData = () => {
  const [inData, setInData] = useState({
    Country: "",
    City: "",
    Population: "",
  });
  function handelChange(e) {
    const { id, value } = e.target;
    setInData({ ...inData, [id]: value });
  }
  return (
    <>
      <form
        action=""
        className="formData"
        onSubmit={(e) => {
          e.preventDefault();
          axios.post("http://localhost:3004/details", inData);
        }}
      >
        <input
          id="Country"
          type="text"
          onChange={(e) => {
            handelChange(e);
          }}
          placeholder="Country"
        />
        <input
          id="City"
          type="text"
          onChange={(e) => {
            handelChange(e);
          }}
          placeholder="City"
        />
        <input
          id="Population"
          type="number"
          onChange={(e) => {
            handelChange(e);
          }}
          placeholder="Population"
        />
        <input type="submit" value="add" />
      </form>
    </>
  );
};
