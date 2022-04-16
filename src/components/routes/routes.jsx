import { Nav } from "../jsx/nav";
import { Route, Routes } from "react-router-dom";
import { Table } from "../jsx/table";
import { useState } from "react";
import { FormData } from "../jsx/form";

export const Routers = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/add" element={<FormData />} />
      </Routes>
    </>
  );
};
