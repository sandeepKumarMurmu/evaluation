// import { Thead } from "./thead";
import "../css/table.css";
import { useEffect, useState } from "react";
import axios from "axios";

export const Table = () => {
  const [data, setData] = useState([]);
  const [del, setDel] = useState(0);
  const [country, setCountry] = useState([]);
  useEffect(() => {
    getData();
    getCountry();
  }, [del]);

  function getCountry() {
    axios.get("http://localhost:3004/countries").then(({ data }) => {
      setCountry([...data]);
    });
  }

  function getData() {
    axios.get("http://localhost:3004/details").then(({ data }) => {
      setData(data);
    });
  }
  function handleDelete(id) {
    console.log(id);
    axios.delete(`http://localhost:3004/details/${id}`);
    setDel(del + 1);
  }

  function filterData(i) {
    if (i > 0) {
      data.sort((a, b) => a.Population - b.Population);
      setData([...data]);
    } else {
      data.sort((a, b) => b.Population - a.Population);
      setData([...data]);
    }
  }
  console.log(country);
  return (
    <>
      <div className="filters">
        <select name="" id="">
          <option value="">select Country</option>
          {country.map((ele) => (
            <option value={`${ele.country}`}>{`${ele.country}`}</option>
          ))}
        </select>
        <button
          onClick={() => {
            filterData(1);
          }}
        >
          ascending
        </button>
        <button
          onClick={() => {
            filterData(-1);
          }}
        >
          decending
        </button>
      </div>
      <table className="body">
        <thead>
          <tr>
            <td>id</td>
            <td>Country</td>
            <td>City</td>
            <td>Population</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
          {data.map((ele, i) => (
            <tr key={ele.id}>
              <td>{i + 1}</td>
              <td>{ele.Country}</td>
              <td>{ele.City}</td>
              <td>{ele.Population}</td>
              <td>
                <button>Edit</button>
              </td>
              <td>
                <button
                  onClick={() => {
                    handleDelete(ele.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
