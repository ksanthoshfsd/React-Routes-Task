import React from "react";
import Cards from "../Components/Cards/Cards";

const DataScience = ({ data }) => {
  let ds = data.filter((element) => element.head === "Data Science Program");
  return (
    <div className="container">
      <h3>Data Science Program</h3>
      <Cards data={ds} />
    </div>
  );
};

export default DataScience;