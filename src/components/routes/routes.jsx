import { Nav } from "../jsx/nav";
import { Route, Routes } from "react-router-dom";
import { Table } from "../jsx/table";
import { useState } from "react";
import { FormData } from "../jsx/form";
import { AddCounty } from "../jsx/addCountry";

export const Routers = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/add-country" element={<AddCounty />} />
        <Route path="/add-city" element={<FormData />} />
      </Routes>
    </>
  );
};
