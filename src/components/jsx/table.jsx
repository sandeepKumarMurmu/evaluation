// import { Thead } from "./thead";
import "../css/table.css";
import { useEffect, useState } from "react";
import axios from "axios";

export const Table = () => {
  const [data, setData] = useState([]);
  const [del, setDel] = useState(0);
  const [edit, setEdit] = useState(0);
  useEffect(() => {
    getData();
  }, [del, edit]);

  function getData() {
    axios.get("http://localhost:3004/details").then(({ data }) => {
      setData(data);
    });
  }
  return (
    <>
      <div className="filters">
        <select name="" id=""></select>
        <button>ascending </button>
        <button>decending</button>
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
          {data.map((ele) => (
            <tr key={ele.id}>
              <td>{ele.id}</td>
              <td>{ele.Country}</td>
              <td>{ele.City}</td>
              <td>{ele.Population}</td>
              <td>
                <button>Edit</button>
              </td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
